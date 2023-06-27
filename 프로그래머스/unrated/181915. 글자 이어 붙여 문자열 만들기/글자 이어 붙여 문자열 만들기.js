function solution(my_string, index_list) {
  let result = '';
  index_list.forEach((idx) => {
    result += my_string[idx];
  });

  return result;
}