function solution(k, d) {
  //! 진수가 좌표평면을 좋아하지 않았더라면 일어나지 않았을 이야기
  // x축 y축 직교하는 2차원 좌표 평면에 점 찍으면서 놀고 있음 왜 이렇게 노냐
  // k, d가 주어질 때
  // 원점 (0, 0)으로부터 x축 방향으로 a*k, y축 방향으로 b*k만큼 떨어진 위치에 찍고
  // 원점이랑 거리가 d가 넘으면 점 안 찍음
  // 이중포문마렵다
  
   // 방법을 찾을 수 없어 원의 방정식 이용

  let result = 0;
  for(let x  = 0 ; x <= d ; x += k){
    let y = parseInt(Math.sqrt(d * d - x * x));
    result += parseInt(y/k)+1;
  }
  return result;

}


solution(2, 4)