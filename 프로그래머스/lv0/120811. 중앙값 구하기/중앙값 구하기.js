function solution(array) {
  array.sort( (a,b) => b - a)
  return array[Math.ceil(array.length / 2)-1]
}

solution(	[9, -1, 0])