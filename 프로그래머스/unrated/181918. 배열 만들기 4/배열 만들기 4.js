function solution(arr) {
  let i = 0;
  const stk = [];
  while(i < arr.length){
    if(!stk.length){
      stk.push(arr[i]);
      i += 1;
    } 
    else if(stk.length && stk.at(-1) < arr[i]){
      stk.push(arr[i]);
      i += 1;
    }
    else if(stk.length && stk.at(-1) >= arr[i]) stk.pop();
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3]))