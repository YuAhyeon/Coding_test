function solution(my_string, n) {
  return my_string.slice(my_string.length - n);
}

console.log(solution('ProgrammerS123', 11));
console.log(solution('He110W0r1d', 5));
