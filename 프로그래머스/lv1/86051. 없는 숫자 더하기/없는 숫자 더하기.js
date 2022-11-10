function solution(numbers) {
//     // 0부터 9까지 없는 숫자를 더해 주는 문제
//     let sum = 45; // 0~9를 모두 더한 값 45
//     for(let i = 0 ; i < numbers.length ; i++){ //numbers 요소 하나씩 순회
//         for(let j = 0 ; j <= 9 ; j++){ // 0~9를 중첩 for문으로 돌려서 numbers에 있으면 빼 준다
//             if(numbers[i] === j){
//                 sum -= j
//             }
//         }        
// }
//     return sum;
// 

// reduce()로도 풀 수 있음...
    
let numbers_sum = numbers.reduce((a, b) => a + b) // numbers의 모든 합
    return 45 - numbers_sum; // 0~9까지 모두 더한 값 45에 빼 준다!
    
}