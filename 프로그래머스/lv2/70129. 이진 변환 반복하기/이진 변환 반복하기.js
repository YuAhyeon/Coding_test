function solution(s) {
  let cnt = 0;
  let zero = 0;

  //! 한 글자가 남을 때까지 실행
  while(s > 1){
    let len = s.length;
    //? s의 모든 0을 제거
    s = s.replaceAll('0', '');
    //? 처음 들어온 s의 길이 - 0을 제거한 후의 s의 길이를 zero에 누적
    zero += len - s.length;
    //? s의 길이를 2진법으로 표현
    s = s.length.toString(2);
    //? 이진 변환 횟수 cnt
    cnt++;
  }

  return [cnt, zero];
}

solution("110010101001");