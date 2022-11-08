function solution(arr) {
    // 가장 작은 값을 구한다.
   let min = Math.min(...arr);
    // splice를 이용해서 삭제
    // arr.indexOf(min) >> 삭제할 인덱스 위치
    // 1 >> 제거할 수
    arr.splice(arr.indexOf(min), 1);
    // 빈 배열이면 [-1] 리턴
    if(arr.length === 0){
         return [-1];
     }
    // 아니라면 배열 리턴
        else{
            return arr;
        }
}
// 테스트는 통과하고 채점은 빠꾸먹음 ㅠㅠ
// function solution(arr) {
//     //arr에서 가장 작은 값을 구한다.
//     let min = Math.min(...arr); 
//     //arr를 처음부터 끝까지 도는데 min이랑 같으면 해당 요소를 제거한다.
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] === min){
//             arr.pop(arr[i]);
//         }
//     }
//     빈 배열이면 [-1] 리턴
//     if(arr.length === 0){
//          return [-1];
//      }
//     아니라면 배열 리턴
//         else{
//             return arr;
//         }
// }

// 테스트는 통과하고 채점은 빠꾸먹음 ㅠㅠ
// function solution(arr) {
//     // 가장 작은 요소를 arr[0]이라고 가정한 뒤, 비교하여 제일 작은 요소를 변수 min에 재할당한다.
//     let min = arr[0]; //제일 작은 요소가 든 변수
//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     //arr에서 제일 작은 요소 min을 뺀다.
//     arr.pop(min); 
//     //arr의 빈 배열이라면 [-1] 리턴
//     if(arr.length === 0){
//         return [-1];
//     }
//     // 제일 작은 수를 제거한 배열 리턴
//     return arr;
// }