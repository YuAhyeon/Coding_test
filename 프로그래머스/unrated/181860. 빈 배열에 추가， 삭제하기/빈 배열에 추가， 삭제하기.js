function solution(arr, flag) {
  let answer = [];

  flag.forEach((e, idx) => {
    if (e) {
      const newArr = Array(arr[idx] * 2).fill(arr[idx]);
      answer = answer.concat(newArr);
    } else {
      answer = answer.slice(0, answer.length - arr[idx]);
    }
  });

  return answer;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]))