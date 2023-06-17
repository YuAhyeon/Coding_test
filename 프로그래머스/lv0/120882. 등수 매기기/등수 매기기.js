function solution(scoreArr) {
  scoreArr = scoreArr
    .map((score, idx) => [(score[0] + score[1]) / 2, idx])
    .sort((a, b) => b[0] - a[0]);

  const result = [];
  let count = 0;
  let prevScore = null;
  
  for (let i = 0; i < scoreArr.length; i += 1) {
    const score = scoreArr[i][0];
    const idx = scoreArr[i][1];
    
    if (score !== prevScore) {
      count = i + 1;
    }
    
    result[idx] = count;
    prevScore = score;
  }

  return result;
}

solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]);