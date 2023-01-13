function solution(n, left, right) {
  /*
  정수 n 왼 오 주어져 1차원 배열 만드려고 함

  ? n행 n열 크기의 비어있는 2차원 배열 만듦
  ? i부터 n까지 i행 i열을 각 i로 채움?...
  ? 다 이어붙여서 1차원으로 만듦
  ! 근데 인덱스 left  ~  right만 리턴??
  
  */

  /* 
  결과는 어차피 인덱스 left부터 right까지 리턴이니까 반복 범위를 리턴 범위로 설정하기
  x값 => i % n
  y값 => i / n 
  */

  const arr = [];

  for (let i = left; i <= right; i++) {
    const x = i % n;
    const y = parseInt(i / n);
    arr.push(Math.max(x, y) + 1);
  }

  return arr
}

solution(4, 7, 14);

/*
n = 3

3행 3열
     0  1  2
0 [ [1, 2, 3],
1   [2, 2, 3],
2   [3, 3, 3]  ]


2 % 3



[[1, 2, 3],[2, 2, 3],[3, 3, 3]]
  0  1  2   3  4  5   6  7  8


*/
