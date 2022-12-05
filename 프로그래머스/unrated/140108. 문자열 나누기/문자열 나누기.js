function solution(s) {
    let x = 0;
    let xCnt = 0; // x가 나온 횟수
    let notXCnt = 0; // x가 아닌 다른 글자가 나온 횟수
    let result = [];
    for (let i = 0; i < s.length; i++) {
      // x와 같으면 x++ 아니면 not++
      s[x] === s[i] ? xCnt++ : notXCnt++;
  
      // 카운트가 같으면 x가 바뀜
      // x의 위치 = x + xCnt + notXCnt
      if (xCnt === notXCnt) {
        result.push(s.slice(x, x + xCnt + notXCnt));
        x +=  xCnt + notXCnt;
        xCnt = 0;
        notXCnt = 0;
      }
    }
    // ab ra ca da br a 처럼 남을 경우
    // 지금까지 문자열을 나눈 배열의 길이가 원래 문자열의 길이보다 작은 것은 문자열이 남았다는 것이므로 +1 해 준다.
    console.log(result)
    return result.join("").length < s.length ? result.length + 1 : result.length;
  }
  
  solution("abracadabra");
  
