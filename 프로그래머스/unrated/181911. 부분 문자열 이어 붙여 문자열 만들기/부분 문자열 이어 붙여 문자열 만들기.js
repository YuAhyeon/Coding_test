function solution(my_strings, parts) {
  let result = '';
  my_strings.forEach((str) => {
    const [s, e] = parts.shift();
    result += str.slice(s, e + 1);
  });
  return result;
}

console.log(
  solution(
    ['progressive', 'hamburger', 'hammer', 'ahocorasick'],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
