function solution(box, n) {
  /*
    주사위를 상자에 최대 몇 개 넣을 수 있는지
    - 가로, 세로, 높이 별로 주사위 모서리가 몇 개가 들어가는지 확인
    - 직육면체 부피 공식 가로 * 세로 * 높이 리턴
  */

  const width = parseInt(box[0] / n);
  const depth = parseInt(box[1] / n);
  const height = parseInt(box[2] / n);

  const count = width * depth * height;

  return count;
}

solution([10, 8, 6], 3)