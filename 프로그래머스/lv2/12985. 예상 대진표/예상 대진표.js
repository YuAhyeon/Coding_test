function solution(n,a,b){
  //! a와 b는 만날 때까지 필승이고, n은 2의 지수 승으로 들어온다고 했으니까
  // a와 b를 2로 계속 나누면서 카운트 올려줌 같은 값이 되면(라운드에서 만난다는 의미) 반복문 탈출 
  let round = 0;
  while(a !== b){
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    round++
  }
  console.log(round)
  return round;
}

solution(8, 4, 7)

// 절반 나눠서
// ㅇㅅㅇ
//! 아 지수 승만 들어옴 !! 
//? 2 4 8 16 32 64


//! n = 16
//? 4라                   A  B
//? 3라                 3A |  B13 
//?                3 |   A |  B | 13          
//? 2라           13 |  5A | 9B | 1315
//?      1 |  3 |  5 |  A |  9  |  B  | 13   |   15
//? 1라 12 | 34 | 56 | 7A | 910 | 11B | 1314 | 1516