function solution(num_list) {
  const odd = num_list.reduce((a, c, i) => i % 2 === 0 ? a + c : a, 0);
  const even = num_list.reduce((a, c, i) => i % 2 === 1 ? a + c : a, 0);
  return Math.max(odd, even);
}