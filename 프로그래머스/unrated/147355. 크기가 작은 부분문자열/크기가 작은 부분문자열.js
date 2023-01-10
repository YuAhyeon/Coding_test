function solution(t, p) {
  /*
  p와 비교하기 위해서 t를 p길이만큼인 부분문자열을 만들어 주어야 한다.
  부분문자열 = t 처음부터 p의 길이만큼 => 첫번째 글자 제거 후 => t 처음부터 p의 길이만큼 => ...
  ! p와 길이 패턴이 같을 때까지 반복해서 push

  그렇게 만들어 준 문자열 패턴 배열을 순회하면서 Number 타입 p랑 비교해서
  ? 작거나 같으면 횟수를 cnt하고 cnt 리턴
  */

  let cnt = 0;

  // t를 p와 비교하기 위한 부분문자열 배열 만들어 주기
  const partStr = [];
  while(t.length){
    if(t.length < p.length) break;
    const str = t.slice(0, p.length)
    partStr.push(str)
    t = t.slice(1)
  }
  console.log(partStr) 
  
  // 부분문자열 배열과 p를 비교해서 작거나 같으면 cnt
  for(let i = 0 ; i < partStr.length ; i++){
    const tNum = Number(partStr[i]);
    const pNum = Number(p);
    if( tNum <= pNum) cnt++
  }

  return cnt;
}

solution("3141592", "271")