function solution(num, k) {
  num = [...String(num)];
  return num.indexOf(String(k))=== -1 ? num.indexOf(String(k)) : num.indexOf(String(k)) + 1
}

solution(29183, 1)