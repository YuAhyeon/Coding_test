function solution(arr, k) {
  const answer = [...new Set(arr)];

  if(answer.length < k){
    const newArr = Array(k - answer.length).fill(-1);
    return answer.concat(newArr);
  }
  else{
    return answer.slice(0, k);
  }
}

console.log(solution([0, 1, 1, 2, 2, 3], 3))
console.log(solution([0, 1, 1, 1, 1], 4))