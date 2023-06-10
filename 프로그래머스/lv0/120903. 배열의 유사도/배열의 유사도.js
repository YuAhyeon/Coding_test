function solution(s1, s2) {
  let count = 0;
  
  s2.forEach(e => {
    if(s1.includes(e)){
      count += 1;
    }
  });

  return count;
}

solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])