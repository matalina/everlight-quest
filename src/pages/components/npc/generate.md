# NPC Generation 

## Species Specific Creature Creation

1. Choose a level between 1 and 10
2. Hit points = [level]d6 with an average of 3 * [level]
3. Choose a base weapon type to use (light, medium, heavy)
4. (optional) Roll on descriptor, type, focus verb and focus noun to create a sentence
5. (optional) Roll on disposition and/or motivation tables
6. Roll on loot table
7. (optional) Follow Species specific guidelines for any modifications
8. (optional -- required for beneficial NPCs) Choose 1 non-combat skill for every odd level to be [level]+1 or spend 2 skill slots to be [level]+2

### Venatori

All Venatori are practiced in either a melee weapon of their choice, unarmed, or guns and take no penalties while using this weapon of choice.

All Venatori have [level] occult knowledge.

All Venatori get [level]+1 to staying hidden around mundanes, seeing through the occult, and initiative

Level 5 or higher Venatori get +1 to armor with no penalty and +1 to damage

Level 8 or higher Venatori get one of the following abilities: [Fight On](https://callmepartario.github.io/og-csrd/#ability-fight-on) (139) or [Lethal Damage](https://callmepartario.github.io/og-csrd/#ability-lethal-damage) (158) with their weapon of choice

### Therian

If a Therian has not undergone their first change treat as a human.

All Therians have [level] occult knowledge.

All Therians get [Beast Form](https://callmepartario.github.io/og-csrd/#ability-beast-form) (112)

Level 3 or higher Therians get [Controlled Change](https://callmepartario.github.io/og-csrd/#ability-controlled-change) (122)

Level 5 or higher Therians get [Greater Controlled Change](https://callmepartario.github.io/og-csrd/#ability-greater-controlled-change) (146), HP +2, damage + 1

Level 8 or higher Therians get [Perfect Control](https://callmepartario.github.io/og-csrd/#ability-perfect-control) (169) damage + 1, armor + 1
### Vampires

All Vampires have [level] occult knowledge.

All Vampires get [Drain Creature](https://callmepartario.github.io/og-csrd/#ability-drain-creature) (131), are vulnerable to radiant and fire damage taking +2 extra damage, are immediately impaired if they take a wooden stake through the heart. In direct sunlight all tasks are hindered and take +1 radiant damage/round (vulnerable damage does not apply here). 

All Vampires gain [Extra Recovery](https://callmepartario.github.io/og-csrd/#ability-extra-recovery) (138) and [Far Step](https://callmepartario.github.io/og-csrd/#ability-far-step) (138).

Level 5 or higher Vampires get [Drain Machine](https://callmepartario.github.io/og-csrd/#ability-drain-machine) (131) and **Sire a Childe**

Level 8 or higher Vampires get [Drain at a Distance](https://callmepartario.github.io/og-csrd/#ability-drain-at-a-distance) (131) and **Take a Lesser/Greater Chevalier**

Level 10 Vampires get **Shadow walk** -- [Teleportation](https://callmepartario.github.io/og-csrd/#ability-teleportation) (190)
### Sussuri

All Sussuri have [level] occult knowledge, [level]-2 (minimum 1) of **Rune Casting** and runic knowledge

Level 5 or higher humans gain +1 armor and +1 damage

Level 8 or higher humans gains [Dream Thief](https://callmepartario.github.io/og-csrd/#ability-dream-thief) (132) or [Built-In Weaponry](https://callmepartario.github.io/og-csrd/#ability-built-in-weaponry) (116)
### Human

All Humans are hindered in occult knowledge

Level 5 or higher humans gain +1 armor and +1 damage

Level 8 or higher humans gains [Greater Skill With Defense](https://callmepartario.github.io/og-csrd/#ability-greater-skill-with-defense) (147) or [Tough It Out](https://callmepartario.github.io/og-csrd/#ability-tough-it-out) (193)

# NPC Template

```
# Full Name
_also known as, titles, etc_

## Description

**Hair:** 
**Eyes:** 
**Height:** 
**Build:** 

[distinguished features]

[clothing]

## Stat Block

[sentence]
[hp, damage]
**disposition:**  
**loot:** 

**skills:** 
**abilities:**
**modifications:** 
* 

## History
```
# NPC Types

interface NonPlayerCharacter {
  name: string;
  aka?: string[];
  level: number;
  target: number;
  description: CharacterDescription;
  stats: StatBlock;
  history: Timeline;
}  

interface CharacterDescription {
  hair: string;
  eyes: string;
  height: string;
  build: string;
  features: string;
  clothes: string;
}

interface StatBlock {
  sentence: CypherSystemSentence;
  hitPoints: number;
  damage: number;
  disposition: string;
  loot: string[];
  skills: string[];
  abilities: string[];
  modifications: string[];
}

interface CypherSystemSentence {
  tier_level: number;
  descriptor: string[];
  species: string[];
  type: string;
  focus: string;
  flavor?: string;
}

interface Timeline {
  [date:string]: string | string[] | Timeline;
}