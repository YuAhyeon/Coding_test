function solution(emergency) {
  let arr = emergency.slice().sort((a, b) => b -a);
  return emergency.map(ele => arr.indexOf(ele)+1)
}

solution([3, 76, 24])