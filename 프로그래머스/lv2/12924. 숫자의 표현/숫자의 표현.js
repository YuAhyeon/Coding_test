function solution(n) {
  // 자기 자신은 무조건 포함이니까 cnt는 1부터 시작
  let cnt = 1;

  // n의 절반 이상의 수는 조합 시 n을 무조건 넘으니까  n/2
  for (let i = 1; i <= n / 2; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum === n) cnt++;
      else if (sum > n) break;
    }
  }
  return cnt;
}

solution(15);

