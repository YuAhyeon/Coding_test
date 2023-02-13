function solution(n) {
  let arr = [];
  for(let i = 1 ; i <= n ; i++){
    arr.push(i);
  }

  return arr.filter(e => e % 2 === 1).sort((a, b) => a - b)
}

solution(10)