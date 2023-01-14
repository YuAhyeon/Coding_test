/*
  nearer => 자신과 같은 글자 중 더 가까운 인덱스 차이를 뽑아오는 함수
  i => 기준 문자열의 인덱스 위치
  str => 비교할 문자열
  s => 원본 문자열  (str과 비교할 때 s[i]로 사용하기 위해 매개변수로 넘겨 줌)
*/
function nearer(i, str, s) {
  //? 기준 문자열의 인덱스 - 비교되는 문자열의 인덱스를 계속 push해서 그중 제일 거리가 작은 것을 리턴
  const nearbyIdx = [];
 for (let j = 0; j < str.length; j++) {
    if (str[j] === s[i]) {
      nearbyIdx.push(i - j);
    }
  }
  return Math.min(...nearbyIdx);
}

/*
! 맨 처음 문자열은 처음 나오는 것이기 때문에 result에 -1로 셋팅 후 시작
한 글자씩 순회하며 돌 때 처음부터 순회하고 있는 요소 앞까지 str로 잘라 
indexOf를 통해 
? 없다면 바로 -1를  push 해 주고 
? 있다면 순회하는 요소가 여러번 나올 경우를 대비해 더 가까운 인덱스를 뽑아주기 위해 nearer 함수 호출
*/
function solution(s) {
  const result = [-1];
  for (let i = 1; i < s.length; i++) {
    const str = s.slice(0, i);
    str.indexOf(s[i]) === -1
      ? result.push(str.indexOf(s[i]))
      : result.push(nearer(i, str, s));
  }
  return result;
}

solution('banana');
