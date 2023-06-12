function solution(my_str, n) {
  const result = [];

  while(my_str){
    result.push(my_str.slice(0, n));
    my_str = my_str.slice(n, my_str.length);
  }

  return result;
}

solution("abc1Addfggg4556b", 6)