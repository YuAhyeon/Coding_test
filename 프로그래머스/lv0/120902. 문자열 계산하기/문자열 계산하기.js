function solution(my_string) {
  // eval() 사용 없이 => eval() 지양
  const calculation =  my_string.split(' ');
  let sum = 0;
  

  for(let i = 0 ; i < calculation.length ; i++){
    if (calculation[i] === '+' || calculation[i] === '-') continue
    if(calculation[i-1] === '+'){
      sum += +Number(calculation[i])
    }else if(calculation[i-1] === '-'){
      sum += -Number(calculation[i])
    }else{
      sum += Number(calculation[i])
    }
  }

  return sum
}

solution("6 + 4 - 2")