import { WEAPON_WEIGHT } from './types';
export interface NonPlayerCharacter {
  name: string;
  aka?: string[];
  level: number;
  target: number;
  description: CharacterDescription;
  stats: StatBlock;
  history: Timeline;
}  

export interface CharacterDescription {
  hair: string;
  eyes: string;
  height: string;
  build: string;
  features: string;
  clothes: string;
}

export interface StatBlock {
  sentence: CypherSystemSentence;
  hitPoints: number;
  damage: Damage[];
  disposition: string;
  loot: string[];
  skills?: string[];
  abilities?: string[];
  modifications?: string[];
}

export interface Damage {
  value: number;
  type: string;
}

export interface CypherSystemSentence {
  tier_level: number;
  descriptor: string[];
  species: string;
  type: string;
  focus: string;
  flavor?: string;
}

export interface Timeline {
  [date:string]: string | string[] | Timeline;
}

export const SPECIES = <const> ['human','sussuri','therian','vampire','venatori'];
export type Species = typeof SPECIES[number];

export const LEVEL = <const> [1,2,3,4,5,6,7,8,10];
export type Level = typeof LEVEL[number];

export const SUPER = <const> [...LEVEL, 11,12,13,14,15];
export type SuperLevel = typeof SUPER[number];

export const WEAPONWEIGHT = <const> ['light','medium','heavy'];
export type WeaponWeight = typeof WEAPONWEIGHT[number];

export const WEAPONDAMAGE = <const> ['bashing','bladed','ranged'];
export type WeaponDamage= typeof WEAPONDAMAGE[number];