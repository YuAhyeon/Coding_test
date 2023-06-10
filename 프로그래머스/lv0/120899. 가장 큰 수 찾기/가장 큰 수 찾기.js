function solution(array) {
  const result = [];
  const maxNum = Math.max(...array)

  result.push(maxNum)
  result.push(array.indexOf(maxNum))
  
  return result;
}

solution([9, 10, 11, 8])