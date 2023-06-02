function solution(numbers, direction) {
  let add = 0;

  switch(direction){
    case "left":
      add = numbers.shift();
      numbers.push(add)
      break;
      case "right":
      add = numbers.pop();
      numbers.unshift(add)
      break;
  }

  return numbers
}

solution([1, 2, 3], "right")
solution([4, 455, 6, 4, -1, 45, 6], "left")