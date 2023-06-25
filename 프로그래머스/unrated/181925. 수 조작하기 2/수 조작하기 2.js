function solution(numLog) {
  const controlObj = { '1': 'w', '-1': 's', '10': 'd', '-10': 'a' };
  return numLog.slice(1).reduce((acc, cur, idx)=>acc + controlObj[`${numLog[idx+1]-numLog[idx]}`],"");
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]))