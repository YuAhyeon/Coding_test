function solution(n) {
  const answer = [];
  for (let i = 0; i < n; i += 1) {
    let zeroFillArr = Array(n).fill(0);
    zeroFillArr[i] = 1;
    answer.push(zeroFillArr);
  }
  return answer;
}

console.log(solution(3));
console.log(solution(6));
console.log(solution(1));
