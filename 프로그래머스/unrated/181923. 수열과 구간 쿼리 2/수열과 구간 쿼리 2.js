function solution(arr, queries) {
  const result = [];
  queries.forEach(querie => {
    const [s, e, k] = querie;
    const range = arr.slice(s, e + 1).sort((a, b) => a - b);

    if(range.at(-1) <= k) result.push(-1)
    else {
      for(let i = 0 ; i < range.length ; i += 1){
        if(range[i] > k){
          result.push(range[i]);
          break;
        }
      }
    }
  })
  return result;
}

console.log(solution([0, 1, 2, 4, 3], [[0, 4, 2], [0, 3, 2], [0, 2, 2]]))