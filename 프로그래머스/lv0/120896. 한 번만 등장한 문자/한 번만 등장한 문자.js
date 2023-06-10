function solution(s) {
  s = [...s];
  let result = {};

  s.forEach((e) => {
    !result.hasOwnProperty(e) ? (result[e] = 1) : (result[e] += 1);
  });

  result = Object.entries(result).sort((a, b) => a[1] - b[1]);
  return result
    .filter((e) => e[1] < 2)
    .map((e) => e[0])
    .sort()
    .join('');
}

solution('hello');
