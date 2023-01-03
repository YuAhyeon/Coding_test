function solution(arr1, arr2) {
  /*
  각 배열들끼리 행과 열을 곱한 값을 새로운 배열에 담아 리턴시키기

  결과 배열은 arr1의 row 수 * arr2[0] 요소의 수
  결과 배열에 미리 0을 채워 넣고 해당하는 인덱스에 결과 값을 할당하는 방식으로 풀어보기
  */

  console.log(arr1.length)
  console.log(arr2[0].length)


  let arr = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
  console.log(arr)

 for(let row1 = 0 ; row1 < arr1.length ; row1++){
    for(let col = 0 ; col < arr2[0].length ; col++){
      for(let row2 = 0 ; row2 < arr2.length ; row2++){
        arr[row1][col] += arr1[row1][row2] * arr2[row2][col];
      }
    }
 }

 console.log(arr)
return arr;
}
solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])


/*
?  arr1        arr2
  [[1, 4],     [[3, 3],
  [3, 2],      [3, 3]]
  [4, 1]] 

  [[2, 3, 2],   [[5, 4, 3],
  [4, 2, 4],    [2, 4, 1],
  [3, 1, 4]]    [3, 1, 1]]
*/