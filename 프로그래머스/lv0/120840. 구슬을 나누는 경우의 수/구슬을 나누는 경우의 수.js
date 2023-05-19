function factorial(num) {
  let returnNum = 1;

  for(let i = num ; i >= 2; i--){
    returnNum *= i
  }

  return returnNum;
} 

function solution(balls, share) {
  return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}


solution(3, 2)
solution(5, 3)