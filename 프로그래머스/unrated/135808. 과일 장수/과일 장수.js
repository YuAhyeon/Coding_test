function solution(k, m, score) {
    // 사과 한 박스 가격 = p(최저 사과 점수) * m(사과 개수)
    // 1. Math.floor(score.length / m) 해서 몇 박스 만들 건지 일단 구해 준 다음에
    const box = Math.floor(score.length / m);
    // 2. 사과 품질 정렬해 줌
    score.sort((a, b) => b - a);
    //! 최하품 사과 인덱스 사과 개수 -1로 하면 각 상자의 마지막 요소가 나오게 된다. 
    //! 정렬을 이미 해 줬기 때문에 -1번째는 최하품 사과임 
    let lowest = m - 1 ;
    
    let profit = 0;
    for (let x = 1; x <= box; x++) {
      profit += score[lowest] * m; // 최하품 사과 점수 * 사과 개수
      lowest += m; // 다음 박스로 넘어가려면 사과 개수를 더해 줌
    }
    return profit;
  }
  
  solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
  