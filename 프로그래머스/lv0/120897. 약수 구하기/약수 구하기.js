function solution(n) {
  const result = [1];

  for(let i = 2; i <= n ; i++){
    if(n % i === 0){
      result.push(i);
    }
  }
    
  return result;
}

solution(24)