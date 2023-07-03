function solution(n, k) {
  let count = 0;
  const arr = n.toString(k).split('0');

  for (let i = 0; i < arr.length; i += 1) {
    if (isPrime(Number(arr[i]))) count += 1;
  }

  return count;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
