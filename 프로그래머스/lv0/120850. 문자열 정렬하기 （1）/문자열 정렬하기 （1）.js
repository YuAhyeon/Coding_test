function solution(my_string) {
  // 정규식으로 문자열 제거 후, split로 배열로 변환, sort 해서 리턴
  const regex = /[a-zA-z]/g
  return my_string.replace(regex, '').split('').sort((a, b) => a - b).map(e => Number(e))
}

solution("hi12392")