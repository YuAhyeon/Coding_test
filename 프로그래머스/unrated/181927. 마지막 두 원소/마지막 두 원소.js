function solution(num_list) {
  const lastNum = num_list.at(-1);
  const lastFrontNum = num_list.at(-2);
  lastNum > lastFrontNum ? num_list.push(lastNum - lastFrontNum) : num_list.push(lastNum * 2);
  return num_list;
}

console.log(solution([2, 1, 6]))