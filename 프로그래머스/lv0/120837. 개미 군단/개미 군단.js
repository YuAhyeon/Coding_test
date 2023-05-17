function solution(hp) {
  let general = Math.floor(hp / 5);
  let soldier = Math.floor((hp - general * 5) / 3);
  let worker = Math.floor(hp - general * 5 - soldier * 3);
  const ant = general + soldier + worker;

  return ant;
}

solution(23);
solution(24);
solution(999);
