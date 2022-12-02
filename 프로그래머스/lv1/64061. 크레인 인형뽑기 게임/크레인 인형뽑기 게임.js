function solution(board, moves) {
  let basket = [];
  let arr = [];
  let newboard = [];
  let before = -1;
  let bang = 0;

  // 크레인 작동할 board 만들어 주기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      arr.push(board[j][i]);
    }
    newboard.push(arr);
    arr = [];
  }

  moves.forEach((ele) => {
    const bring = game(newboard, ele - 1);

    if (bring > 0) {
      // 가져온 게 0보다 크면 인형을 가져 왔다는 것

      if(basket[basket.length-1] === bring){
        bang += 2;
        basket.pop();
      }else{
        basket.push(bring); // 인형을 바구니에 담기
      }
    }

  });

  return bang;
}
// ele은 뽑아야 하는 줄 1
function game(newboard, ele) {
  //마지막부터 처음까지 돌아야 되니까
  let result = 0;
  for (let i = 0; i < newboard[ele].length; i++) {
    if (newboard[ele][i] !== 0) {
      result = newboard[ele][i];
      newboard[ele][i] = 0;
      return result;
    } else if (newboard[ele][i] === 0) {
      continue; // 0이면 다른 요소를 돌아야 함
    }
  }
  return 0;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

// [
//   [0, 0, 0, 4, 3],
//   [0, 0, 2, 2, 5],
//   [0, 1, 5, 4, 1],
//   [0, 0, 0, 4, 3],
//   [0, 3, 1, 2, 1],
// ]
