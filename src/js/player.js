export const player = {
  name: 'playerName', // Aqui poner nombre de usuario. En UI
  class: 'mage',
  level: 1,
  attribute: {
    strength: 0,
    agility: 0,
    constitution: 0,
    intelligence: 0,
  },
  statistics: {
    life: 0,
    attack: 0,
    defense: 0,
    dogde: 0,
    critical: 0,
    energy: 0,
  },
};
export function addName(name) {
  player.name = `${name}`;
}
export function setMageClass() {
  player.class = 'mage';
  player.attribute.strength = 5;
  player.attribute.agility = 4;
  player.attribute.constitution = 3;
  player.attribute.intelligence = 8;
  // Se calcula manualmente. Abajo.
  player.statistics.attack = 25;
  player.statistics.dogde = 0.08;
  player.statistics.critical = 0.08;
  player.statistics.life = 30;
  player.statistics.defense = 30;
  player.statistics.energy = 80;
}
export function setWarriorClass() {
  player.class = 'warrior';
  player.attribute.strength = 8;
  player.attribute.agility = 4;
  player.attribute.constitution = 6;
  player.attribute.intelligence = 2;
  player.statistics.attack = 40;
  player.statistics.dogde = 0.08;
  player.statistics.critical = 0.08;
  player.statistics.life = 50;
  player.statistics.defense = 50;
  player.statistics.energy = 20;
}
export function setPsychicClass() {
  player.class = 'psychic';
  player.attribute.strength = 4;
  player.attribute.agility = 5;
  player.attribute.constitution = 3;
  player.attribute.intelligence = 8;
  player.statistics.attack = 20;
  player.statistics.dogde = 0.1;
  player.statistics.critical = 0.1;
  player.statistics.life = 30;
  player.statistics.defense = 30;
  player.statistics.energy = 80;
}
export function setAssassinClass() {
  player.class = 'assassin';
  player.attribute.strength = 6;
  player.attribute.agility = 8;
  player.attribute.constitution = 3;
  player.attribute.intelligence = 3;
  // Se calcula manualmente. Abajo.
  player.statistics.attack = 30;
  player.statistics.dogde = 0.16;
  player.statistics.critical = 0.16;
  player.statistics.life = 30;
  player.statistics.defense = 30;
  player.statistics.energy = 30;
}

export function addStrengthPoint() {
  player.attribute.strength += 1;
  player.statistics.attack += 5;
}
export function addAgilityPoint() {
  player.attribute.agility += 1;
  player.statistics.critical += 0.02; // Con 10 puntos de agilidad es 10% de daño.
  player.statistics.dogde += 0.02; // Con 10 puntos de agilidad es 10% de defensa.
}
export function addConstitutionPoint() {
  player.attribute.constitution += 1;
  player.statistics.life += 10;
  player.statistics.defense += 10;
}
export function addIntelligencePoint() {
  player.attribute.intelligence += 1;
  player.statistics.energy += 5;
}


