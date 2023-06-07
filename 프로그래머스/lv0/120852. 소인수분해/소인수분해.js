function solution(n) {
  let divisor = 2;
  const decimal = [];

  while(n >= 2){
    if(n % divisor === 0){
      decimal.push(divisor)
      n /= divisor;
    }else {
      divisor += 1;
    }
  }

  return [...new Set(decimal)]
}

solution(12)