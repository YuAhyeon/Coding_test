function solution(n) {
  //? 1. n 다음 큰 숫자는 n보다 커야한다
  //? 2. n 다음 큰 숫자와 n은 2진수 변환 시 1의 갯수가 같다
  //? 1, 2를 만족하는 가장 작은 수
  //! n을 돌리면서 조건 만족하면 바로 리턴

  //? 처음 자연수 n의 2진수 변환 시 1의 갯수
  const nBinaryCnt = n.toString(2).split("1").length;

  //? 다음 큰 숫자의 2진수 변환 시 1의 객수
  let nextNumBinaryCnt = 0;

  //? 다음 큰 수는 n보다 커야 하므로 n++ 시킨 값부터 시작
  while(n){
    n++
    nextNumBinaryCnt = n.toString(2).split("1").length; 
    //? 처음 자연수 n과 다음 큰 숫자의 2진수 변환 시 1의 갯수가 같으면 n 리턴
    if(nextNumBinaryCnt === nBinaryCnt){
      return n;
    }
  }
}

solution(78)