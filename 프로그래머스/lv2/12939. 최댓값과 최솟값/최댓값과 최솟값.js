function solution(s) {
  // 공백으로 기준으로 split
  s = s.split(' ');
  console.log(s);

  // s는 문자열 형태이므로 숫자로 바꾸기
  s = s.map((ele) => (ele = Number(ele)));
  console.log(s);

  // 최대, 최솟값 구하기
  const max = Math.max(...s);
  const min = Math.min(...s);

  // 최솟값 최대값 문자열로 리턴
  let result = `${min} ${max}`;
  console.log(result);

  return result;
  console.log(max);
}

solution('1 2 3 4');
