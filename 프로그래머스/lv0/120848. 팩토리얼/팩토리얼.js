function solution(n) {
  let i = 1;
  let sum = 1;

  while(1){
    sum *= i;
    
    if(sum > n){
      i -= 1
      break;
    }
    i++
  }
  console.log(i)
  return i
}

solution(7)
solution(3628800)