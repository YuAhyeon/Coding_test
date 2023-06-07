function solution(my_string) {
  // 정규표현식을 이용해 모음 제거하기

  const regex = /a|e|i|o|u/g
  return my_string.replace(regex,'')
}

solution("nice to meet you")
solution("bus")