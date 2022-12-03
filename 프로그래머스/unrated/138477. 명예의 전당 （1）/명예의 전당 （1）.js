function solution(k, score) {
  let arr = [];
  let best = [];
  let worst = [];
  for (let i = 0; i < score.length; i++) {
    // 출연 한 명씩 함.
    arr.push(score[i]);

    //! 점수 높은 순으로 정렬
    arr.sort((a, b) => Number(b) - Number(a));

    //! 명예의 전당
    best = [];
    for (let j = 0; j < k; j++) {
      best.push(arr[j]);
    }

    //! undefined 들어갈 때
    for (let x = k - 1; x >= 0; x--) {
      if (best[x] === undefined) best.pop();
    }

    //! 명예의 전당에서 최하위 뽑기
    worst.push(best[best.length - 1]);
  }

  return worst;
}

solution(3, [10, 100, 20, 150, 1, 100, 200]);
