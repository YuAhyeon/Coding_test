function solution(number) {
  const sum = number.split('').reduce((a, c) => a + Number(c), 0);
  return sum % 9;
}

console.log(solution("123"))
console.log(solution("78720646226947352489"))