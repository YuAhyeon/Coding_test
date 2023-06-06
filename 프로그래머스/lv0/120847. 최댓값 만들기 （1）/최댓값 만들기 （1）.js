function solution(numbers) {
  // 정렬 => pop() pop() 끼리 곱하기
  numbers.sort((a, b) => a - b)

  const first = numbers.pop();
  const second = numbers.pop();

  return first * second
}

solution([0, 31, 24, 10, 1, 9]);