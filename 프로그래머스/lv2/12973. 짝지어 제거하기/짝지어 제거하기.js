function solution(s){
  let word = [];
  
  // 스택으로 넣어서 마지막과 마지막+1가 같으면 빼주기
  // 결과적으로 담아뒀던 word에 아무것도 없으면, 짝지어 제거하기가 성공된 것이므로 1리턴
  for(let i = 0 ; i < s.length ; i++){
    word.push(s[i]);

    if(word.length >= 2 && word.at(-1) === word.at(-2)){
      word.pop();
      word.pop();
    }
  }
  return !word.length ? 1 : 0;
}

solution('baabaa')
