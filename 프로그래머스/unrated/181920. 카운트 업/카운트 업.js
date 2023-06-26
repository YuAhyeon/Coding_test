function solution(start, end) {
  const anwser = [];
  for(let i = start ; i <= end ; i += 1) anwser.push(i);
  return anwser;
}

console.log(solution(3, 10))