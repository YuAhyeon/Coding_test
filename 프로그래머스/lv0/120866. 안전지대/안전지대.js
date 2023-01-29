function solution(board) {
  for(let row = 0; row < board.length; row++){
    for(let col = 0; col < board[0].length; col++){
      // 폭탄 있을 때
      if(board[row][col] === 1){
        //양옆 표시
        if (board[row][col - 1] === 0) board[row][col - 1] = 'X';
        if (board[row][col + 1] === 0) board[row][col + 1] = 'X';
        // 윗줄이 존재할 떄
      if(board[row-1]){
        if (board[row - 1][col - 1] === 0) board[row - 1][col - 1] = 'X'; // 위왼쪽
        if (board[row - 1][col] === 0) board[row - 1][col] = 'X'; //위
        if (board[row - 1][col + 1] === 0) board[row - 1][col + 1] = 'X'; //위오른쪽
      }

      if(board[row+1]){
        if (board[row + 1][col - 1] === 0) board[row + 1][col - 1] = 'X'; // 아래왼쪽
        if (board[row + 1][col] === 0) board[row + 1][col] = 'X'; //아래
        if (board[row + 1][col + 1] === 0) board[row + 1][col + 1] = 'X'; //아래오른쪽
      }
    }
  }
}

  // 다 합치기
  let newBoard = [];
  board.forEach((row) => {
    newBoard = [...newBoard, ...row];
  });
  
  // 0 개수 추출
  newBoard = newBoard.filter((zone) => zone === 0).length
  
  console.log(board);
  console.log(newBoard);

  return newBoard

}


solution([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]); // expect output => 16
// solution([[0, 0, 1, 0, 0]])
// solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]) // expect output => 13
// solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) // expect output => 25
// solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]) // expect output => 0
