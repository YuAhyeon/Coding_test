function solution(l, r) {
  const answer = [];
  for (let i = l; i <= r; i += 1) {
    const regex = /['0', '5']/g;
    const str = String(i);
    if (str.replace(regex, '').length === 0) {
      answer.push(Number(str));
    }
  }
  return !answer.length ? [-1] : answer;
}

console.log(solution(5, 555));
console.log(solution(100, 20));
