function solution(arr, k) {
  return k % 2 === 1 ? arr.map(e => e * k) : arr.map(e => e + k);
}

console.log(solution([1, 2, 3, 100, 99, 98], 3))
console.log(solution([1, 2, 3, 100, 99, 98], 2))