
// 최대공약수 | 유클리드 호제법
function gcd(a, b) {
  return a === 0 ? b : gcd(b % a, a)
}

// 최대공배수 | a * b / 최대공약수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 두 수 사이의 최소공배수를 가지고 다음 수의 최소공배수를 구하는 식으로 풀기
// 배열의 마지막 요소까지 쭉 이와 같은 방법으로 구하면 마지막 요소는 배열의 모든 요소들의 최소공배수가 나옴!

function solution(arr) {
  let result = arr[0];

  for (let i = 0 ; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }
  return result;
}