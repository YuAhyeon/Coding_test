function solution(n, control) {
  let num = n;
  const controlObj = { w: 1, s: -1, d: 10, a: -10};
  for(let i = 0 ; i < control.length ; i += 1) num += controlObj[control[i]];
  return num;
}

console.log(solution(0, "wsdawsdassw"))