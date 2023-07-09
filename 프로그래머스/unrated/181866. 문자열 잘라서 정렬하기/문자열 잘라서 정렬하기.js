function solution(myString) {
  return myString.split('x').sort().filter(e => e !== '');
}

console.log(solution("axbxcxdx"))
console.log(solution("dxccxbbbxaaaa"))