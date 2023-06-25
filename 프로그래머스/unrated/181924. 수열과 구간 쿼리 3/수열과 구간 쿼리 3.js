function solution(arr, queries) {
  queries.forEach(querie => {
    const [i, j] = querie;
    let temp = arr [i];
    arr[i] = arr[j];
    arr[j] = temp;
  })
  return arr;
}

console.log(solution([0, 1, 2, 3, 4], [[0, 3], [1, 2], [1, 4]]))