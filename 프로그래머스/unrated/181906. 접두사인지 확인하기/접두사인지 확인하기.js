function solution(my_string, is_prefix) {
  const suffixList = [];
  for (let i = 0; i < my_string.length; i += 1) {
    suffixList.push(my_string.slice(0, i + 1));
  }
  return suffixList.includes(is_prefix) ? 1 : 0;
}

console.log(solution('banana', 'ban'));
console.log(solution('banana', 'nan'));
console.log(solution('banana', 'abcd'));
console.log(solution('banana', 'bananan'));
