function solution(n) {
  /*
    이중 for문을 돌면서 1부터 n까지 각 약수의 개수 구하기
    약수의 수가 3 이상이면 composition number count 해서 리턴
  */

  let cn = 0;

  for(let i = 1 ; i <= n ; i++){
    let divior = 0;

    for(let j = 1 ; j <= i ; j++){
      if(i % j === 0){
        divior += 1;
      }
    }

    if(divior >= 3){
      cn += 1;
    }
  }

  return cn;
}

solution(15)