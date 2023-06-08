function solution(sides) {
  sides.sort((a, b) => a-b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2
}

solution([199, 72, 222])