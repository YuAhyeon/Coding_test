function solution(my_string) {
  const result = [];
  for (let i = 0; i < my_string.length; i += 1) {
    result.push(my_string.slice(i, my_string.length));
  }

  return result.sort();
}

console.log(solution('banana'));
console.log(solution('programmers'));
