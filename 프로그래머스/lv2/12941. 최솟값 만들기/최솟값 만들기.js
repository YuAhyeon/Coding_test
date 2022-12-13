function solution(A,B){
  // A, B 각각 한 개의 숫자를 뽑아서 곱한다.
  // 곱한 값들을 누적해서 더한다.
  // 최종적으로 누적된 값이 최소가 되도록 만드는 게 목표
  // A를 오름차순으로, B를 내림차순으로 정렬해서 A, B의 각 인덱스를 곱할 때 최솟값을 만들 수 있음
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);


  let result = 0;
  for(let i = 0 ; i < A.length ; i++){
    const sum = A[i] * B[i];
    result += sum;
  }

  return result;
}