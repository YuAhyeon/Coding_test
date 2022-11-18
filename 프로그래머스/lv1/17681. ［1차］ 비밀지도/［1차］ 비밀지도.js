function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
      
    let row = (arr1[i] | arr2[i]).toString(2);
      
    row = "0".repeat(n - row.length) + row;
    row = row.replace(/[10]/g, (a) => (+a ? "#" : " "));
      
    answer.push(row);
  }
  return answer;
}



// function solution(n, arr1, arr2) {
        
//     // 1. arr1, arr2를 2진수로 변환
//     // 2. 배열 요소들을 0이면 ' '을 1이면 '#'으로 바꿔 준다. (지도 완성!!)
//     // 3. arr1과 arr2를 비교해서 둘 중 하나라도 #이 있으면 #으로 바꿔 준다
//     let binary_arr1 = [];
//     for(let i of arr1){
//       binary_arr1.push(i.toString(2));
//     }
    
//     let binary_arr2 = [];
//     for(let j of arr2){
//       binary_arr2.push(j.toString(2));
//     }
    
//     let arr1_result = [];
//     for(let a = 0 ; a < n ; a++){ // 행 수만큼 돈다.
//         let arr = [];
//         let hash = ''
//         for(let b = 0 ; b < binary_arr1.length ; b++){
//             if(binary_arr1[b] < 5){
//                 hash += ' ';
//             }
//             binary_arr1[b] === 1 ? hash += '#' : hash += ' ';
//             arr.push(hash);
//         }
//         arr1_result.push(arr);
//     }
    
//     let arr2_result = [];
//     for(let a = 0 ; a < n ; a++){ // 행 수만큼 돈다.
//         let arr = [];
//         let hash = '';
//         for(let b = 0 ; b < binary_arr2.length ; b++){
//             if(binary_arr2[b] < 5){
//                 hash += ' ';
//             }
//             binary_arr2[b] === 1 ? hash += '#' : hash += ' ';
//             arr.push(hash);
//         }
//         arr2_result.push(arr);
//     }
    
//     let result = [];

//     for(let x = 0 ; x < arr1_result.length ; x++){
//         let hash = '';
//         for(let o = 0 ; o < x.length ; o++){
//             if( arr1_result[x][o] && arr2_result[x][o] === '#' ){
//                 hash += '#';
//             }
//             else if( arr1_result[x][o] || arr2_result[x][o] === '#' ){
//                 hash += '#';
//             }
//             else {
//                 hash += ' ';
//             }
//             result.push(hash);
//         }
//     }
    
//     return result;
// }

// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
