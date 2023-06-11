function solution(n) {
  const numArr = [...String(n)];
  return numArr.reduce((a, c) => Number(a) + Number(c), 0);
}

solution(1234)