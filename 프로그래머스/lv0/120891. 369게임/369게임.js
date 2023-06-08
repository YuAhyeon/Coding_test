function solution(order) {
  order = order + '';
  order = order.split('')
  let clap = 0;
  
  order.forEach(number => {
    if(number === '3' || number === '6' || number === '9'){
      clap++;
    }
  });
  
  return clap
}

solution(29423)