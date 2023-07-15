function solution(myString) {
  const L_ASCII = 108;
  return [...myString].map(str => str.charCodeAt(0) < L_ASCII ? 'l' : str).join('');
}

console.log(solution("abcdevwxyz"))
console.log(solution("jjnnllkkmm"))