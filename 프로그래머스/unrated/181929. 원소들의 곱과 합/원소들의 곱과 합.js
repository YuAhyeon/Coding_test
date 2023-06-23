function solution(num_list) {
  const square = Math.pow(num_list.reduce((a, c) => a + c, 0), 2);
  const multiplication = num_list.reduce((a, c) => a * c, 1);
  return multiplication < square ? 1 : 0
}