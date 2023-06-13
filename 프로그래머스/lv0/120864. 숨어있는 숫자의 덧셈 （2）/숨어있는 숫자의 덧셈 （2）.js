function solution(my_string) {
  let sum = 0;
  const regex = /[a-zA-Z]/g;
  my_string = my_string.replace(regex, 'a').split('a');
  
  my_string.forEach(num => {
    if(Number(num)) sum += Number(num)
  });
  console.log(sum)
  return sum;
}

solution("aAb1B2cC34oOp")
solution("zzz111")
solution("zzz11a1")