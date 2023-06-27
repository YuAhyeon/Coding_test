function solution(my_string, queries) {
  queries.forEach((querie) => {
    const [s, e] = querie;
    const reverseStr = my_string
      .slice(s, e + 1)
      .split('')
      .reverse()
      .join('');
    const prevStr = my_string.slice(0, s);
    const nextStr = my_string.slice(e + 1, my_string.length);
    my_string = `${prevStr}${reverseStr}${nextStr}`;
  });
  return my_string;
}

console.log(
  solution('rermgorpsam', [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
