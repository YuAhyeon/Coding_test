function solution(n) {
  // 1. num만큼 for문을 돌린다.
  // 2. 피보나치 배열을 만든다.
  // 3. 배열의 마지막 요소를 1234567로 나눈 나머지를 구한다.

  let first = 0;
  let second = 1;
  let sum = 0;
  let arr = [0, 1];


  //! 피보나치 배열을 만든 후, 마지막 요소로 1234567로 나눈 몫을 리턴
  for(let i = 1 ; i < n ; i++){
    sum = first + second % 1234567
    first = second % 1234567;
    second = sum;
    arr.push(sum % 1234567);
  }
  console.log(arr)
  console.log(arr.at(-1))
  result = arr.at(-1) % 1234567
  console.log(result)
  return result;
}

solution(3)