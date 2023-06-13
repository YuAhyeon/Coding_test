function solution(spell, dic) {
  return dic.filter(word=>spell.every(c=>word.includes(c))).length ? 1 : 2;
}

solution(	["z", "d", "x"], ["def", "dww", "loveaw"])