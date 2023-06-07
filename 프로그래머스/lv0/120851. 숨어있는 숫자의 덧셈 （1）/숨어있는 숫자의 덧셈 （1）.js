function solution(my_string) {
  // 정규식으로 문자열 제거, 배열로 변환 후 reduce로 합계 계산
  const regex = /[a-zA-z]/g

  return my_string
    .replace(regex, '')
    .split('')
    .reduce((a, c) => Number(a) + Number(c), 0);

}

solution("aAb1B2cC3zzz4oOp")
solution("1a2b3c4d123")