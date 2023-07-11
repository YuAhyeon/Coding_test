function solution(arr) {
  const zero = Math.pow(2, Math.ceil(Math.log2(arr.length))) - arr.length;
  const zeroArr = Array(zero).fill(0);
  return arr.concat(zeroArr);
}

console.log(solution([1, 2, 3, 4, 5, 6]))
console.log(solution([58, 172, 746, 89]))