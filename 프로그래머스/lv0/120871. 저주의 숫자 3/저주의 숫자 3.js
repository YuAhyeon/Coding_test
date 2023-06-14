function solution(n) {
  let num = 0;

  for(let i = 1 ; i <= n ; i++){
    num += 1;

    while(num.toString().includes('3') || num % 3 === 0){
      num += 1;
    }
  }

  return num;
}

solution(15)