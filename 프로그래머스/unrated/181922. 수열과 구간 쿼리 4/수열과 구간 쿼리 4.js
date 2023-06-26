function solution(arr, queries) {
  const answer = arr.slice();
  queries.forEach((querie) => {
    const [s, e, k] = querie;
    for (let i = 0; i < answer.length; i += 1) {
      if (i >= s && i <= e) {
        if (i % k === 0) answer[i] += 1;
      }
    }
  });

  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);