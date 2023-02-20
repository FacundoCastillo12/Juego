/* eslint-disable max-len */
import {
  throwDiceAttack, calculateDamage, calculateDefense, calculateRealAttack,
} from './core.js';

const player = {
  name: 'playerName', // Aqui poner nombre de usuario. En UI
  level: 1,
  attribute: {
    strength: 0,
    agility: 0,
    constitution: 0,
    intelligence: 0,
  },
  statistics: {
    life: 100,
    attack: 10,
    defense: 500,
    dogde: 1,
    critical: 0,
    energy: 0,
  },
};
const enemy = {
  name: 'Zack el Trascendental',
  level: 1,
  attribute: {
    strength: 0,
    agility: 0,
    constitution: 0,
    intelligence: 0,
  },
  statistics: {
    life: 100,
    attack: 100,
    defense: 10,
    dogde: 0,
    critical: 0,
    energy: 0,
  },
};

export function calculateLifePlayer(realDamage) {
  player.statistics.life -= realDamage;
}
export function calculateLifeEnemy(realDamage) {
  enemy.statistics.life -= realDamage;
}
export function showLifeEnemy() {
  return enemy.statistics.life;
}
export function showLifePlayer() {
  return player.statistics.life;
}
export function checkWinSide() {
  if (player.statistics.life <= 0) {
    return 'player lose';
  }
  if (enemy.statistics.life <= 0) {
    return 'enemy lose';
  }
}
export function attackPlayerToEnemy() {
  const luckUser = throwDiceAttack();
  const luckEnemy = throwDiceAttack();
  const attackUser = calculateDamage(player.statistics.attack, luckUser, player.statistics.critical);
  const defEnemy = calculateDefense(enemy.statistics.defense, luckEnemy, enemy.statistics.dogde);
  const realDamage = calculateRealAttack(attackUser, defEnemy);
  console.log('El jugador ataco!');
  calculateLifeEnemy(realDamage);
}
export function attackEnemyToPlayer() {
  const luckEnemy = throwDiceAttack();
  const luckPlayer = throwDiceAttack();
  const attackEnemy = calculateDamage(enemy.statistics.attack, luckEnemy, enemy.statistics.critical);
  const defPlayer = calculateDefense(player.statistics.defense, luckPlayer, player.statistics.dogde);
  const realDamage = calculateRealAttack(attackEnemy, defPlayer);
  console.log('El enemigo atacó!');
  calculateLifePlayer(realDamage);
}
