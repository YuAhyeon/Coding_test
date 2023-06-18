function solution(babbling) {
  const regex = /aya|ye|woo|ma/g;
  babbling = babbling.join('0');
  return babbling.replace(regex, '').split('0').filter(e => e === '').length
}

solution(["aya", "yee", "u", "maa", "wyeoo"])