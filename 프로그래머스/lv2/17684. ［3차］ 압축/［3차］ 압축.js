function solution(msg) {
  const dict = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let prev = '';
  const answer = [];

  for(let i = 0 ; i < msg.length ; i += 1){
    prev += msg[i];

    if(!dict.includes(prev)){
      // 사전에 단어가 없을 경우, 마지막 인덱스 번호를 answer에 추가하고, 사전에 단어를 등록함
      answer.push(dict.indexOf(prev.slice(0, -1)) + 1);
      dict.push(prev);
      prev = msg[i];
    }
  }

  if(prev) answer.push(dict.indexOf(prev) + 1);
  return answer;
}

console.log(solution("KAKAO"))
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"))
console.log(solution("ABABABABABABABAB"))
