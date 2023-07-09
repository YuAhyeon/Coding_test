function solution(myString) {
  return myString.split('x').map(str => str.length);
}

console.log(solution("oxooxoxxox"))
console.log(solution("xabcxdefxghi"))