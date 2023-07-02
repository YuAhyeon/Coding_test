function solution(my_string, indices) {
  return [...my_string].filter((str, idx) => !indices.includes(idx)).join('');
}