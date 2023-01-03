function poppop(bracket) {
  bracket.pop();
  bracket.pop();

  return bracket;
}

function solution(s) {
  /*
  (), [], {} 모두 올바른 괄호 문자임
  ! 스택으로 접근
  로테이션을 돌면서 로테이션 돌 때 s를 하나씩 bracket에 담아 마지막 두 요소가 []나 {}나 ()로
  끝나는지 확인 후, 맞다면 두 요소를 빼주는 형식으로 풀이
  로테이션을 돌 때마다 제일 앞에 있는 요소가 뒤로 가야 되니까 shift한 것을 pop으로 다시 넣어준다.
  */
  s = [...s];
  let result = 0;

  for (let rotation = 0; rotation < s.length; rotation++) {
    let bracket = [];
    for (let i = 0; i < s.length; i++) {
      bracket.push(s[i]);
      if (bracket.length >= 2) {
        if (bracket.at(-2) === '[' && bracket.at(-1) === ']') {
          bracket = poppop(bracket);
        } else if (bracket.at(-2) === '(' && bracket.at(-1) === ')') {
          bracket = poppop(bracket);
        } else if (bracket.at(-2) === '{' && bracket.at(-1) === '}') {
          bracket = poppop(bracket);
        }
      }
    }
    if (!bracket.length) result++;
    s.push(s.shift());
  }
  console.log(result);
  return result;
}

solution('[)(]');
