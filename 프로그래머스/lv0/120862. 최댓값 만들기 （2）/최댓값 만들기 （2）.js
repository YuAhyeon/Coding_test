function solution(numbers) {
  numbers.sort((a, b) => b - a);
  const max1 = numbers[0] * numbers[1];
  const max2 = numbers[numbers.length-1] * numbers[numbers.length-2];
  return max1 > max2 ? max1 : max2;
}

solution([1, 2, -3, 4, -5])