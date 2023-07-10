function solution(myStr) {
  const regex = /['a', 'b', 'c']/g;
  const replaceStr = myStr.replace(regex, '0');
  const answer = replaceStr.split('0').filter(e => e !== '');
  return answer.length ? answer : ['EMPTY'];
}

console.log(solution("baconlettucetomato"))
console.log(solution("abcd"))
console.log(solution("cabab"))