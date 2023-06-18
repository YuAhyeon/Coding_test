function solution(i, j, k) {
  let str = '';

  for(i ; i <= j ; i += 1){
    str += i;
  }

  return str.split('').filter(n => n === String(k), 0).length;
}

solution(1, 13, 1)