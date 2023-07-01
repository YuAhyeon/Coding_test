function solution(k, dungeons) {
  const answer = [];
  const visited = Array(dungeons.length).fill(false);

  function dfs(count, k) {
    answer.push(count);
    for (let i = 0; i < dungeons.length; i += 1) {
      let [min, consume] = dungeons[i];

      // 남은 피로도로 던전을 탐색할 수 있고, 탐색하지 않은 던전일 경우
      if (k >= min && !visited[i]) {
        visited[i] = true;
        dfs(count + 1, k - consume);
        visited[i] = false;
      }
    }
  }
  dfs(0, k);

  return Math.max(...answer);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

/*
  최소 피로도 => 던전 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
  소모 피로도 => 던전 탐험 후 소모되는 피로도

  ex) 최소 80, 소모 20 던전 탐험
  => 유저 피로도 80 이상 => 탐험 후 20 소모
*/
