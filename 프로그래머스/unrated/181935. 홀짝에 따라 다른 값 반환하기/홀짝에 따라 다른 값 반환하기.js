function solution(n) {
  let sum = 0;

  if(n % 2 === 0){
    for(let i = 1 ; i <= n ; i += 1) if(i % 2 === 0) sum += Math.pow(i, 2);
  }else {
    for(let i = 1 ; i <= n ; i += 1) if(i % 2 === 1) sum += i;
  }
  
  return sum;
}

solution(10)