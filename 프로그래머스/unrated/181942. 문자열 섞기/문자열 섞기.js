function solution(str1, str2) {
  let result = '';
  for(let i = 0 ; i < str1.length ; i += 1){
    result += `${str1[i]}${str2[i]}`
  }
  return result;
}

solution("aaaaa", "bbbbb")