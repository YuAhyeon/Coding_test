function solution(brown, yellow) {
  const sum = brown + yellow;
  // 노란색은 무조건 중앙
  //! 갈 갈 갈
  //! 갈 노 갈
  //! 갈 갈 갈
    
  // 가로, 세로 길이는 최소 3
  for (let height = 3; height <= brown; height++) {
    // yellow는 양옆 위아래 모두 brown이 테두리를 감싸고 있기 때문에
    // 노란색 카펫의 가로 세로 길이
    // 전체 가로 세로 길이 각각 -2 해서 곱한 게 yellow랑 같으면 가로, 세로 리턴
      if ((sum / height - 2) * (height - 2) === yellow) {
        console.log([sum/height, height])
          return [sum/height, height]
      }
  }
}

solution(10, 2)
