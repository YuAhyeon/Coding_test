function solution(my_string, is_suffix) {
  const suffixList = [];
  for (let i = 0; i < my_string.length; i += 1) {
    suffixList.push(my_string.slice(i));
  }

  return suffixList.includes(is_suffix) ? 1 : 0;
}

console.log(solution('banana', 'ana'));
console.log(solution('banana', 'nan'));
console.log(solution('banana', 'wxyz'));
console.log(solution('banana', 'abanana'));
