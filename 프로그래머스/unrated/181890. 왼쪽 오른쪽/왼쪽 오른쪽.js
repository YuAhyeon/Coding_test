function solution(str_list) {
  const regex = /['l','r']/g;
  const isIR = str_list.join('').match(regex);
  if(!isIR) return [];
  
  const lIdx = str_list.indexOf('l');
  const RIdx = str_list.indexOf('r');

  if(lIdx === -1) return str_list.slice(RIdx+1);
  if(RIdx === -1) return str_list.slice(0, lIdx);
  return lIdx < RIdx ? str_list.slice(0, lIdx) : str_list.slice(RIdx+1)
}