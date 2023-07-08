function solution(myString, pat) {
  let count = 0;
  for(let i = 0 ; i < myString.length ; i += 1){
    const str = myString.slice(i, i + pat.length);
    if(str === pat) count += 1;
  }
  return count;
}