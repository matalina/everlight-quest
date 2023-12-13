import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { LEVEL, SUPER, type NonPlayerCharacter, SPECIES, WEAPONWEIGHT, WEAPONDAMAGE } from "../types";
import { randomFromArray } from '../random';
import { weaponDamage } from '../constants';

export function generateNPC(level: string, species: string, superhero?: boolean): NonPlayerCharacter {
  const npc = {} as NonPlayerCharacter;

  if(level === 'random') level = randomLevel(superhero);
  if(species === 'random') species = randomSpecies();

  npc.level = parseInt(level);
  npc.stats = {
    sentence: {
      tier_level: npc.level,
      descriptor: randomDescriptor(),
      species,
      type: randomType(),
      focus: randomFocus(),
    },
    hitPoints: randomHP(npc.level),
    damage: randomDamage(npc.level),
    disposition: randomDisposition(),
    loot: randomLoot(),
    skills: randomSkills(species, npc.level),
    abilities: randomAbilities(species, npc.level),
    modifications: randomModifications(species, npc.level),
  };

  return npc;
}

function randomLevel(superhero = false) {
  let list = superhero ? [...SUPER] : [...LEVEL]
  return randomFromArray(list);
}

function randomSpecies() {
  return randomFromArray([...SPECIES]);
}

function randomDescriptor(){
  return [];
}

function randomDamage(level: number) {
  const weight = randomFromArray([...WEAPONWEIGHT]);
  const type = randomFromArray([...WEAPONDAMAGE]);
  return [{
    value: weaponDamage[weight],
    type: `${weight} ${type}`,
  }]
}

function randomType() {
  return '';
}

function randomFocus() {
  return '';
}

function randomHP(level:number) {
  return (new DiceRoll(`${level}d6`)).total;
}

function randomDisposition() {
  return '';
}

function randomLoot() {
  return [];
}

function randomSkills(species: string, level: number) {
  return [];
}

function randomAbilities(species: string, level: number) {
  return [];
}

function randomModifications(species: string, level: number) {
  return [];
}