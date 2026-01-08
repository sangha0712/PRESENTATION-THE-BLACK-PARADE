export enum FactionId {
  ZERO_HOUR = 'ZERO_HOUR',
  AEGIS = 'AEGIS',
  BLACK_SWAN = 'BLACK_SWAN',
  UNAFFILIATED = 'UNAFFILIATED',
}

export enum Rank {
  S = 'S',
  A_PLUS = 'A+',
  A = 'A',
  B_PLUS = 'B+',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

export interface FactionData {
  id: FactionId;
  name: string;
  description: string;
  territory: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    glow: string;
  };
  logoSim: string; // A character or symbol to represent the logo
}

export interface CharacterData {
  id: string;
  name: string;
  gender: '남' | '여' | '불명';
  factionId: FactionId;
  appearance: string;
  age: string;
  abilityName: string;
  abilityDesc: string;
  rank: Rank;
  personality: string[];
  features: string[];
}