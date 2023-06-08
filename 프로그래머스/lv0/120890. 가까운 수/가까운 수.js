function solution(array, n) {
  if(array.length === 1) return array[0];
  array.push(n);
  array.sort((a,b) => a- b)
  const idx = array.indexOf(n)
  return n - array[idx-1] > array[idx+1] - n ? array[idx+1] : array[idx-1]
}

solution([3, 10, 28], 20)
