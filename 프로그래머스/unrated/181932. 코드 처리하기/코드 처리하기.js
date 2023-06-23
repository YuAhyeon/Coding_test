function solution(code) {
  let mode = 0;
  let ret = '';

  for(let i = 0 ; i < code.length ; i += 1){
    if(code[i] === '1'){
      mode === 0 ? mode = 1 : mode = 0;
      continue;
    }

    if(mode === 0){
      if(i % 2 === 0) ret += code[i];
    }else if(mode === 1){
      if(i % 2 === 1) ret += code[i];
    }
  }

  return ret.length ? ret : "EMPTY";
}