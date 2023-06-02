function solution(numbers, k) {
  let ball = 1
  
  for(let i = 0 ; i < k -1 ; i++){
    ball += 2
    if(ball > numbers.length) ball -= numbers.length
  }
  console.log(ball)
  return ball
}

solution([1,2,3,4,5,6], 5)