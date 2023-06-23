function solution(num_list) {
  let even = '';
  let odd = '';
  num_list.forEach(num => num % 2 === 0 ? even += String(num) : odd += String(num));
  return Number(even) + Number(odd);
}