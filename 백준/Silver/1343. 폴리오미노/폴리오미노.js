const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('.');

const polyominoA = 'AAAA'
const polyominoB = 'BB'

const answer = input.map(e => {
  if(e.length % 2 === 1) return e
  const a = Math.floor(e.length / 4);
  const b = Math.floor((e.length % 4) / 2);
  const strA = polyominoA.repeat(a);
  const strB = polyominoB.repeat(b);
  return strA + strB;
}).join('.')

console.log(answer.includes('X') ? -1 : answer);