function solution(keyinput, board) {
  const up = +1;
  const down = -1;
  const left = -1;
  const right = +1;
  
  const range = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];
  let character = [0, 0];

  keyinput.forEach(key => {
    if(key === 'up' && character[1] !== range[1]) character[1] += up;
    if(key === 'down' && character[1] !== -range[1]) character[1] += down;
    if(key === 'left' && character[0] !== -range[0]) character[0] += left;
    if(key === 'right' && character[0] !== range[0]) character[0] += right;
  });

  return character;
}

solution(["left", "right", "up", "right", "right"], [11, 11])
solution(["down", "down", "down", "down", "down"], [7, 9])