/*
Aqui se generan los enemigos aleatorios.
*/
export const enemy = {
  name: 'playerName', // Aqui poner nombre de usuario. En UI
  level: 1,
  type: 'asassin',
  tier: 'elite',
  kind: 'human',
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
  inventory: {
    slotOne: {
      itemOne: {
        strength: 0, // items, aumentan tanto las estadisticas como pueden aumentar atributos.
      },
    },
  },
};

export function updateEnemy(level, kind, tier, type, name) {
  enemy.level = level;
  enemy.kind = kind;
  enemy.tier = tier;
  enemy.type = type;
  enemy.name = name;
}

export function countPointsPerLevel(level) {
  // Cinco puntos por nivel
  return level * 5;
}
export function selectEnemyKind(kind) {
  const kinds = {
    human: 0,
    robotic: 5,
    beast: 5,
    void: 10,
    divine: 15,
    demon: 15,
    alien: 20,
    transcendental: 30,
  };
  return kinds[kind];
}
export function selectTierEnemy(tier) {
  const tiers = {
    normal: 0,
    elite: 5,
    subBoss: 10,
    boss: 20,
    superBoss: 40,
  };
  return tiers[tier];
}
export function selectTypeEnemy(type) {
  const types = {
    warrior: [0.5, 0.05, 0.4, 0.05],
    assassin: [0.3, 0.5, 0.15, 0.05],
    fighter: [0.3, 0.2, 0.3, 0.2],
    psychic: [0.3, 0.05, 0.15, 0.5],
    sorcerer: [0.2, 0.05, 0.15, 0.6],
  };
  return types[type];
}

export function sumAllPoints(onePoints, twoPoints, threePoints) {
  return onePoints + twoPoints + threePoints;
}
export function obtainRemainderPercentaje(number, percentage) {
  return (number / 100) * percentage;
}
export function distributePoints(points, percentages = [0, 0, 0, 0]) {
  const values = percentages.map((p) => p * points);
  const roundedValues = values.map((v) => Math.round(v));
  return roundedValues;
}
export function recalculateStatistics(pointsAttribute) {
  const [strength, agility, constitution, intelligence] = pointsAttribute;
  for (let i = 1; i <= strength; i += 1) {
    enemy.statistics.attack += 5;
  }

  for (let i = 1; i <= agility; i += 1) {
    enemy.statistics.critical += 0.02;
    enemy.statistics.dogde += 0.02;
  }

  for (let i = 1; i <= constitution; i += 1) {
    enemy.statistics.life += 10;
    enemy.statistics.defense += 10;
  }

  for (let i = 1; i <= intelligence; i += 1) {
    enemy.statistics.energy += 5;
  }
}

export function distributeAttributePoints(pointsAttribute) {
  const [strength, agility, constitution, intelligence] = pointsAttribute;
  enemy.attribute.strength = strength;
  enemy.attribute.agility = agility;
  enemy.attribute.constitution = constitution;
  enemy.attribute.intelligence = intelligence;
}
function generateRandomNameForEachKind(kind) {
  if (kind === 'human') {
    const prefixes = ['Xe', 'Ste', 'Lu', 'Yuf', 'Ar', 'Ne', 'To', 'Ga', 'Ju', 'You', 'Ema', 'Da', 'Ja', 'Ali', 'Emi', 'Mari'];
    const suffixes = ['cio', 'ey', 'sintas', 'wi', 'ienzo', 'lief', 'de', 'son', 'ax', 'xa'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomNamePrefix}${randomNameSuffix}`;
  }
  if (kind === 'robotic') {
    const prefixes = ['Ro', 'Omni', 'Synth', 'Cyber', 'Mecha', 'Quantum', 'Nano', 'Astro', 'Giga', 'Sonic', 'Titan', 'Hyper', 'Mega', 'Nova', 'Nexus'];
    const suffixes = ['bot', 'droid', 'tronic', 'boid', 'tech', 'tron', 'core', 'X', 'prime', 'omega', 'dex'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const randomNumber = Math.floor(Math.random() * 2000);
    return `${randomNamePrefix}${randomNameSuffix}${randomNumber}`;
  }
  if (kind === 'beast') {
    const prefixes = ['Fury', 'Savage', 'Wild', 'Mighty', 'Giant', 'Venomous', 'Thunderous', 'Enraged', 'Raging', 'Majestic', 'Crazed', 'Bloodthirsty', 'Deadly', 'Horrific', 'Crazy', 'Golden'];
    const suffixes = ['fang', 'claw', 'maw', 'talon', 'horn', 'hide', 'scale', 'spike', 'jaw', 'thorn', 'tooth', 'fur', 'pelt', 'bone', 'scale', 'eye'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomNamePrefix}${randomNameSuffix}`;
  }
  if (kind === 'void') {
    const prefixes = ['Void', 'Nether', 'Dark', 'Abyssal', 'Shadow', 'Night', 'Vortex', 'Cosmic', 'Eternal', 'Eldritch', 'Spectral'];
    const suffixes = ['essence', 'abyss', 'horror', 'fiend', 'entity', 'wraith', 'shade', 'phantom', 'oblivion', 'void', 'nightmare', 'aberration', 'chaos', 'realm', 'vortex'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomNamePrefix}${randomNameSuffix}`;
  }
  if (kind === 'divine') {
    const prefixes = ['Ara', 'Nir', 'Zel', 'Elo', 'Ael', 'Kyr', 'Dae', 'Zor', 'Aur', 'Aes', 'Sol', 'The', 'Iri', 'Ava', 'Rai', 'Xan', 'Eli', 'Adr', 'Aer', 'Leo', 'Apo', 'Orn', 'Jas', 'Axi', 'Apo'];
    const suffixes = ['don', 'mar', 'nir', 'ius', 'iel', 'yth', 'ira', 'wyn', 'il', 'ael', 'ara', 'us', 'ein', 'er', 'ion', 'iel', 'io', 'ine', 'il', 'ara', 'th', 'is', 'eus', 'ia', 'eus'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomNamePrefix}${randomNameSuffix}`;
  }
  if (kind === 'demon') {
    const prefixes = ['Aza', 'Beel', 'Cimer', 'Dant', 'Eur', 'Baal', 'Grem', 'Halph', 'Ibl', 'Jax', 'Ker', 'Lil', 'Diab', 'Neph', 'Ori', 'Paim', 'Rah', 'Sama', 'Tal', 'Uvall', 'Mephi', 'Xez', 'Yen', 'Zim', 'Zar'];
    const suffixes = ['ith', 'on', 'ias', 'or', 'as', 'ax', 'ok', 'orius', 'oroth', 'oros', 'orax', 'don', 'gor', 'gos', 'mar', 'lox', 'vax', 'zel'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomNamePrefix}${randomNameSuffix}`;
  }
  if (kind === 'alien') {
    const prefixes = ['Zor', 'Kor', 'Xen', 'Gor', 'Thr', 'Yol', 'Vor', 'Bor', 'Gon', 'Tron', 'Xar', 'Dax', 'Zex', 'Lar', 'Fyr', 'Nax', 'Vax', 'Zyl', 'Zek'];
    const suffixes = ['ax', 'on', 'ix', 'or', 'ik', 'yx', 'in', 'orix', 'orax', 'onix', 'arix', 'yxx', 'yzz', 'ikx', 'yxon', 'yrax', 'oron', 'orok', 'yrok'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNameSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomNamePrefix}${randomNameSuffix}`;
  }
  if (kind === 'transcendental') {
    const prefixes = ['The Fastest', 'The Fiercest', 'The Greatest', 'The Fearless', 'The Smartest', 'The Wisest', 'The Boldest', 'The Most Skilled', 'The Most Talented', 'The Most Creative', 'The Most Charismatic',
      'The Most Inspiring', 'The Most Courageous', 'The Most Resilient', 'The Most Resourceful', 'The Most Tenacious', 'The Most Determined', 'The Most Ambitious', 'The Most Visionary'];
    const randomNamePrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    return `${randomNamePrefix} Transcendental`;
  }
}
export function generateEnemyAdjectiveForEachType(type = 'default') {
  if (type === 'warrior') {
    const adjective = ['The Ruthless', 'The Merciless', 'The Bloodthirsty', 'The Unstoppable', 'The Thunderous', 'The Conqueror', 'The Destroyer',
      'The Warlord', 'The Slayer', 'The Butcher', 'The Titan', 'The Legless', 'The Fearful', 'The Predator', 'The Friendly', 'The Clever'];
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    return `${randomAdjective}`;
  }
  if (type === 'sorcerer') {
    const adjective = ['The Wicked', 'The Malevolent', 'The Vile', 'The Diabolical', 'The Maleficent', 'The Cursed', 'The Occult', 'The Warlock',
      'The Witch Doctor', 'The Necromancer', 'The Shaman', 'The Enchanter', 'The Sorcerer', 'The Conjurer', 'The Magus', 'The Occultist', 'The Seer'];
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    return `${randomAdjective}`;
  }
  if (type === 'assassin') {
    const adjective = ['The Silent', 'The Deadly', 'The Ruthless', 'The Shadowy', 'The Stealthy', 'The Swift', 'The Sinister', 'The Cold-blooded',
      'The Merciless', 'The Lethal', 'The Assassin', 'The Shadow', 'The Blade', 'The Nightstalker', 'The Phantom', 'The Ghost', 'The Cutthroat'];
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    return `${randomAdjective}`;
  }
  if (type === 'fighter') {
    const adjective = ['The Savage', 'The Brutal', 'The Ferocious', 'The Relentless', 'The Mighty', 'The Tenacious', 'The Fierce', 'The Ruthless',
      'The Bold', 'The Intense', 'The Brawler', 'The Bruiser', 'The Pit Fighter', 'The Iron Fist', 'The Rampager', 'The Bonecrusher', 'The Battler',
      'The Unstoppable', 'The Juggernaut'];
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    return `${randomAdjective}`;
  }
  if (type === 'psychic') {
    const adjective = ['The Mindbender', 'The Telepath', 'The Psion', 'The Thought Thief', 'The Clairvoyant', 'The Mentalist', 'The Mindbreaker', 'The Psychic Assassin',
      'The Memory Manipulator', 'The Telekinetic Warrior', 'The Illusionist', 'The Psychic Surgeon', 'The Memory Thief', 'The Dreamweaver', 'The Mentalist', 'The Brain Master', 'The Battler',
      'The Hypnotist', 'The Psychic Warrior', 'The Psychic Puppeteer', 'The Psychic Duelist', 'The Brain Bender', 'The Dreamwalker', 'The Psychic Emperor'];
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
    return `${randomAdjective}`;
  }
}

export function generateRandomName(tier, kind, type) {
  if (tier === 'normal') {
    return 'Mob'; // Aqui se deben ver los nombres de mobaletorios y normales. Tipo soldado, guerero, cosas asi para cada clase.
  }
  if (kind === 'transcendental') {
    const name = generateRandomNameForEachKind(kind);
    return name; // Los transcendentales tienen de nombre sus titulos.
  }
  if (tier === 'elite') {
    const name = generateRandomNameForEachKind(kind);
    return name;
  }
  if (tier === 'subBoss' || tier === 'boss' || tier === 'superBoss') {
    const name = generateRandomNameForEachKind(kind);
    const title = generateEnemyAdjectiveForEachType(type);

    return `${name} ${title}`;
  }
}
export function createRandomEnemy(level, kind, tier, type) {
  const name = generateRandomName(tier, kind, type);
  console.log(name); // Aqui, si es mas que elite, quiero que se agregue. algo extra, Titulo.
  updateEnemy(level, kind, tier, type, name);
  const pointsLevel = countPointsPerLevel(level);
  const pointsKind = selectEnemyKind(kind);
  const pointsType = selectTierEnemy(tier);
  const typeEnemy = selectTypeEnemy(type);
  const totalPoints = sumAllPoints(pointsLevel, pointsKind, pointsType);
  const pointsAttribute = distributePoints(totalPoints, typeEnemy);
  distributeAttributePoints(pointsAttribute);
  recalculateStatistics(pointsAttribute);
  return enemy; // en vez de modificar un objeto global, se tendra que o crear una clase o un objeto
}



*/
