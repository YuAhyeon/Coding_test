function solution(arr, queries) {
  queries.forEach(querie => {
      const [s, e] = querie;
      const querieArr = Array.from(Array(e -s + 1), (_, i) => s + i);
      querieArr.map(e => arr[e] += 1);
  })
  return arr;
}

console.log(solution([0, 1, 2, 3, 4], [[0, 1], [1, 2], [2, 3]]))