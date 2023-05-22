function solution(num_list, n) {
  const result = [];
  let arr = [];
  let count = 0;

  for (let i of num_list) {
    if (count === n) {
      result.push(arr);
      arr = [];
      count = 0;

      arr.push(i);
      count++;
      continue;
    }

    arr.push(i);
    count++;
  }

  result.push(arr);
  return result;
}

solution([1, 2, 3, 4, 5, 6, 7, 8], 2);
solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3);
