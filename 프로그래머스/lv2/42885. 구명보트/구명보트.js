function solution(people, limit) {
  // 내림차순 정렬 후
  // 제일 무거운 사람 + 제일 가벼운 사람 넣어지면 boat++ 해주기
  let heavy = [...people].sort((a, b) => b - a);
  let boat = 0;

  // 투포인터로 풀기
  //  [80, 70, 50, 50]
  //!  i           j
  //?      i   j       i + j가 limit보다 작거나 같을 경우, j-- 해서 포인터 이동
  for (let i = 0, j = heavy.length-1; i <= j; i++) {
    if (heavy[i] + heavy[j] <= limit) {
      j--;
    }
    boat++;
  }
  return boat;
}

solution([70, 50, 80, 50], 100);





// // 효율성 시간초과 코드
// function solution(people, limit) {
//   // 가벼운 사람, 무거운 사람 정렬 후
//   // 제일 무거운 사람 + 제일 가벼운 사람 넣어지면 shift! 해주기
//   let light = [...people].sort((a, b) => a - b);
//   let heavy = [...people].sort((a, b) => b - a);

//   let boat = 0;

//   for (let i = 0; i < heavy.length; i++) {
//     // 무거운 사람, 가벼운 사람 되면 boat++ 해 주고 사람들이 보트를 탔으니 빼준다
//     // 빼줬으니 다시 처음부터 비교해야 되므로 i--
//     if (heavy[i] + light[i] <= limit) {
//       heavy.shift();
//       heavy.shift();
//       light.shift();
//       light.shift();
//       boat++;
//       i--;
//     } else {
//       heavy.shift();
//       boat++;
//       i--;
//     }
//   }

//   return boat;
// }

// solution([70, 80, 50], 100);

