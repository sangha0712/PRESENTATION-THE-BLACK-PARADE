
export class AudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private reverbNode: ConvolverNode | null = null;
  private compressorNode: DynamicsCompressorNode | null = null;
  private delayNode: DelayNode | null = null;
  private delayFeedback: GainNode | null = null;
  private delayFilter: BiquadFilterNode | null = null;

  constructor() {
    this.ctx = null;
  }

  private initContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

      // 1. Dynamics Compressor (To glue sounds together)
      this.compressorNode = this.ctx.createDynamicsCompressor();
      this.compressorNode.threshold.value = -20;
      this.compressorNode.knee.value = 30;
      this.compressorNode.ratio.value = 12;
      this.compressorNode.attack.value = 0.003;
      this.compressorNode.release.value = 0.25;

      // 2. Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.4; 

      // 3. Massive Reverb (The "Empty World" feel)
      this.reverbNode = this.ctx.createConvolver();
      // Increased decay for more "ringing" atmosphere
      this.reverbNode.buffer = this.createImpulseResponse(5.0, 5.0); 

      // 4. Delay / Echo (Modified for "Wash" effect)
      this.delayNode = this.ctx.createDelay();
      this.delayNode.delayTime.value = 0.75; // Slower delay to avoid rhythmic clutter
      
      this.delayFeedback = this.ctx.createGain();
      this.delayFeedback.gain.value = 0.6; // High feedback for long sustain

      this.delayFilter = this.ctx.createBiquadFilter();
      this.delayFilter.type = 'lowpass';
      this.delayFilter.frequency.value = 600; // Cut highs to remove "ding" attack from echoes

      // Delay Loop: Delay -> Filter -> Feedback -> Delay
      this.delayNode.connect(this.delayFilter);
      this.delayFilter.connect(this.delayFeedback);
      this.delayFeedback.connect(this.delayNode);

      // Connect Delay ONLY to Reverb (Smear the echo)
      // Removed direct connection to compressor/output to avoid distinct "Ding... Ding..." repeats.
      // Now the echo is only heard as a "cloud" inside the reverb.
      this.delayNode.connect(this.reverbNode);

      // Signal Chain: Sound -> Reverb -> Compressor -> Master -> Out
      this.reverbNode.connect(this.compressorNode);
      this.compressorNode.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  private createImpulseResponse(duration: number, decay: number) {
    const sampleRate = this.ctx!.sampleRate;
    const length = sampleRate * duration;
    const impulse = this.ctx!.createBuffer(2, length, sampleRate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const env = Math.pow(1 - i / length, decay);
      // Darker reverb noise
      left[i] = (Math.random() * 2 - 1) * env;
      right[i] = (Math.random() * 2 - 1) * env;
    }
    return impulse;
  }

  // --- Instrument 1: The "Radiation" Drone Pad ---
  // A slow, evolving texture that represents the contaminated atmosphere
  private playDrone(time: number, freq: number, duration: number) {
    if (!this.ctx) return;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';

    // Deep frequency range
    osc1.frequency.value = freq;
    osc2.frequency.value = freq * 1.01; // Slight detune for "unstable" feel

    filter.type = 'lowpass';
    filter.frequency.value = 200; // Start dark
    filter.Q.value = 1;

    // Filter automation (The "Breathing" of the wasteland)
    filter.frequency.setValueAtTime(200, time);
    filter.frequency.linearRampToValueAtTime(600, time + duration / 2);
    filter.frequency.linearRampToValueAtTime(200, time + duration);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.15, time + 2); // Slow fade in
    gain.gain.linearRampToValueAtTime(0, time + duration); // Slow fade out

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.reverbNode!); // 100% Wet reverb for drone

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration);
    osc2.stop(time + duration);
  }

  // --- Instrument 2: The "Axion" Piano ---
  // Clean, cold, crystalline sound representing the Gifted/Evolution
  private playPiano(time: number, freq: number, duration: number, velocity: number = 0.5) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const oscOver = this.ctx.createOscillator(); // Overtone
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    oscOver.type = 'triangle';

    osc.frequency.value = freq;
    oscOver.frequency.value = freq * 2; // Octave up for "glassy" texture

    const attack = 0.02;
    
    // Envelope
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(velocity, time + attack);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration * 1.5); // Longer tail

    // Overtone fades out slower now for more "shimmer"
    const gainOver = this.ctx.createGain();
    gainOver.gain.setValueAtTime(0, time);
    gainOver.gain.linearRampToValueAtTime(velocity * 0.4, time + attack);
    gainOver.gain.exponentialRampToValueAtTime(0.001, time + 0.8); 

    osc.connect(gain);
    oscOver.connect(gainOver);
    gainOver.connect(gain); // Merge

    gain.connect(this.compressorNode!); // Direct signal (Dry)
    
    // Send to reverb (Increased amount for wash)
    const reverbSend = this.ctx.createGain();
    reverbSend.gain.value = 0.8; 
    gain.connect(reverbSend);
    reverbSend.connect(this.reverbNode!);

    // Send to Delay (New connection for Echo)
    const delaySend = this.ctx.createGain();
    delaySend.gain.value = 0.6; // Slightly increased input
    gain.connect(delaySend);
    delaySend.connect(this.delayNode!);

    osc.start(time);
    oscOver.start(time);
    osc.stop(time + duration + 4); // Extend stop time for trails
    oscOver.stop(time + duration + 4);
  }

  // --- Instrument 3: Sub Bass Pulse ---
  // The earth shifting, the underlying dread
  private playSubPulse(time: number, freq: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.3, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 3.0);

    osc.connect(gain);
    gain.connect(this.compressorNode!);

    osc.start(time);
    osc.stop(time + 3.5);
  }

  // --- Sound Effect: Emergency Alert (EAS) ---
  public playEmergencyAlert() {
    this.initContext();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(e => console.error("Audio resume blocked", e));
    }
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Total duration: 17 seconds as requested
    const totalDuration = 17.0; 
    // Volume: 0.1
    const volume = 0.1; 

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'square';
    // Standard EAS dual-tone dissonance
    osc1.frequency.value = 960;
    osc2.frequency.value = 853;
    
    // Initialize silence
    gain.gain.setValueAtTime(0, t);

    // --- Rhythm Logic ---
    // Pattern: 1.5s Sound, 1.5s Silence
    // Use setValueAtTime for sharp cuts (no fading)
    const soundDuration = 1.5;
    const silenceDuration = 1.5;
    let cycleStart = t;

    while (cycleStart < t + totalDuration) {
      // 1. SNAP ON
      gain.gain.setValueAtTime(volume, cycleStart);
      
      const soundEnd = Math.min(cycleStart + soundDuration, t + totalDuration);

      // 2. SNAP OFF
      gain.gain.setValueAtTime(volume, soundEnd);
      gain.gain.setValueAtTime(0, soundEnd);

      cycleStart += (soundDuration + silenceDuration);
    }

    // Connect and Play
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination); 

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + totalDuration + 0.5); 
    osc2.stop(t + totalDuration + 0.5);
  }

  // --- Sequencer ---
  public async start() {
    this.initContext();
    if (this.ctx!.state === 'suspended') {
      await this.ctx!.resume();
    }
    if (this.isPlaying) return;
    this.isPlaying = true;

    let nextNoteTime = this.ctx!.currentTime;
    // Very Slow, Cinematic Tempo
    const tempo = 50; 
    const secondsPerBeat = 60.0 / tempo;

    // Scale: C Minor (C, D, Eb, F, G, Ab, Bb) - Sorrowful and Dark
    // Chord Progression: Cm (The Ruins) -> Ab (The Mutation) -> Fm (The Struggle) -> G (The Conflict)
    
    const sequenceLength = 32; // 32 beats loop
    let beatIndex = 0;

    const chords = [
      { root: 65.41, type: 'Cm', notes: [130.81, 155.56, 196.00] }, // C2 root
      { root: 51.91, type: 'Ab', notes: [103.83, 155.56, 207.65] }, // Ab1 root
      { root: 43.65, type: 'Fm', notes: [87.31, 130.81, 174.61] },  // F1 root
      { root: 49.00, type: 'Gm', notes: [98.00, 146.83, 196.00] }   // G1 root
    ];

    // Melancholic, sparse melody
    const melodyMap: { [beat: number]: number[] } = {
      // Bar 1 (Cm)
      0: [523.25], // C5
      2: [392.00], // G4
      6: [311.13], // Eb4

      // Bar 2
      8: [392.00], // G4
      10: [466.16], // Bb4
      14: [392.00], // G4

      // Bar 3 (Ab) - Change
      16: [415.30], // Ab4
      18: [311.13], // Eb4
      22: [523.25], // C5

      // Bar 4 (Fm/G) - Tension
      24: [622.25], // Eb5
      26: [587.33], // D5
      30: [392.00], // G4 (Resolve slightly)
    };

    const loop = () => {
      if (!this.isPlaying) return;

      while (nextNoteTime < this.ctx!.currentTime + 0.5) {
        const beatInLoop = beatIndex % sequenceLength;
        const barIndex = Math.floor(beatInLoop / 8); // 8 beats per chord change (very slow)

        // 1. Atmosphere (Drone) - Triggers once per bar (every 8 beats)
        if (beatInLoop % 8 === 0) {
          const chord = chords[barIndex];
          // Play Root Drone
          this.playDrone(nextNoteTime, chord.root, secondsPerBeat * 8);
          this.playDrone(nextNoteTime, chord.root * 1.5, secondsPerBeat * 8); // Perfect 5th texture
          
          // Deep Sub Bass
          this.playSubPulse(nextNoteTime, chord.root / 2);
        }

        // 2. Melody (Piano)
        if (melodyMap[beatInLoop]) {
          melodyMap[beatInLoop].forEach(freq => {
            // Randomize velocity slightly for human feel
            const vel = 0.3 + Math.random() * 0.3; 
            this.playPiano(nextNoteTime, freq, 2.0, vel);
            
            // Occasional Echo note (Evolution theme)
            if (Math.random() > 0.7) {
               setTimeout(() => {
                 if(this.isPlaying) this.playPiano(nextNoteTime + 0.5, freq * 2, 0.5, 0.1);
               }, 500);
            }
          });
        }

        // 3. Random "Geiger Counter" / Debris clicks (Mutation theme)
        if (Math.random() < 0.05) {
           this.playPiano(nextNoteTime, 3000 + Math.random() * 1000, 0.05, 0.05);
        }

        nextNoteTime += secondsPerBeat;
        beatIndex++;
      }
      setTimeout(loop, 50);
    };

    loop();
  }

  public stop() {
    this.isPlaying = false;
    if (this.ctx) {
        this.ctx.close();
        this.ctx = null;
    }
  }
}

export const bgm = new AudioEngine();
