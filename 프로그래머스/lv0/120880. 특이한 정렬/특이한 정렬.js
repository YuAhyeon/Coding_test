function solution(numlist, n) {
  const arrLen = numlist.length;
  const result = [];
  let curNum = n;

  while (result.length < arrLen) {
    let minus = Math.abs(curNum - numlist[0]);
    let minNum = numlist[0];
    
    for(let i = 0 ; i < numlist.length ; i += 1){
      const num = Math.abs(curNum - numlist[i]);

      if (num <= minus) {
        if(num === minus && minNum < numlist[i]){
          minus = num;
          minNum = numlist[i];
          continue;
        }else if (num === minus){
          continue;
        }
        minus = num;
        minNum = numlist[i];
      }
    }
    result.push(minNum);
    numlist = numlist.filter((num) => num !== minNum);
  }

  return result;
}

solution([10,9,8,7,6,5,4,3,2,1,11],6);