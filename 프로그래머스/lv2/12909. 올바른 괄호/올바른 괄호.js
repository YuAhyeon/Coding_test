function solution(s) {
  const start = '(';
  const end = ')';
  
  //! 시작이 "("로 시작하지 않으면 바로 false 리턴
  if(s[0] !== start || s.length < 2  || s.at(-1) !== end ) return false;

  let cnt = 0;

  //! '('일 때 cnt++
  //! else =>  cnt가  0이라면 앞에 '('가 없다는 것이므로 바로 false 리턴
  //!          cnt--
  for(let i = 0 ; i < s.length ; i++){
    if(s[i] === start) cnt++;
    else{
      if(!cnt) {
        return false
      }
    cnt--;
    }
  }
  
  //? 최종적으로 cnt가 0이면 true;
  return cnt === 0 ? true : false;
}
solution('()())(()');




