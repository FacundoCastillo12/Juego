export function getRandomNumber() {
  return Math.floor(Math.random() * (10 - 0 + 1) + 0);
}
export function throwDiceItem() {
  const luck = getRandomNumber();
  if (luck === 10) {
    return 'excelent';
  }
  if (luck >= 7) {
    return 'good';
  }
  if (luck >= 4) {
    return 'normal';
  }
  if (luck >= 1) {
    return 'bad';
  }
  if (luck >= 1) {
    return 'very bad';
  }
}
export function throwDiceAttack() {
  const luck = getRandomNumber();
  if (luck === 10) {
    const ATTACK = 2;
    return ATTACK;
  }
  if (luck === 9) {
    const ATTACK = 1.8;
    return ATTACK;
  }
  if (luck === 8) {
    const ATTACK = 1.6;
    return ATTACK;
  }
  if (luck === 7) {
    const ATTACK = 1.4;
    return ATTACK;
  }
  if (luck === 6) {
    const ATTACK = 1.2;
    return ATTACK;
  }
  if (luck === 5) {
    const ATTACK = 1.0;
    return ATTACK;
  }
  if (luck === 4) {
    const ATTACK = 0.8;
    return ATTACK;
  }
  if (luck === 3) {
    const ATTACK = 0.6;
    return ATTACK;
  }
  if (luck === 2) {
    const ATTACK = 0.4;
    return ATTACK;
  }
  if (luck === 1) {
    const ATTACK = 0.2;
    return ATTACK;
  }
  if (luck === 0) {
    return 0;
  }
}
export function calculateDamage(attackTotal, luck, critical = 0) {
  return attackTotal * (luck + critical);
}
export function calculateDefense(defenseTotal, luck) {
  return ((defenseTotal * luck) / 100) * 10;
}
export function calculateRealAttack(attackTotal, defenseOpponent) {
  if (attackTotal === 0) {
    return 0;
  } else {
    return attackTotal - defenseOpponent;
  }
}

