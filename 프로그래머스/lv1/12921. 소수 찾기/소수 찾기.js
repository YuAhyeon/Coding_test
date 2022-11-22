
// function solution(n) {
//     // 입력받은 1부터 n 사이에 있는 소수의 개수를 반환하기
//     // 자기 자신만 나눠져야 되므로 2부터 n까지다른 수로 나누었을 때 0으로 떨어지면 안 됨
//     // 자기 자신을 제외한 다른 수로 나누어졌을 때 false로 처리하고 for문을 빠져 나옴
//     // 최종으로 true로 남아있으면 count++ 해 주고 리턴
//     let count = 0;
//     for(let i = 2 ; i <= n ; i++){
//         let primeNum = true;
        
//         for(let j = 2; j < i ; j++){
//             if(i % j === 0){
//                 primeNum = false;
//                 break;
//             }
//         }
        
//         if(primeNum === true){
//             count++;
//         }
//     }
//     return count;
// }

function solution(n) {
    // 에라토스테네스의 체
    // 배열에 숫자를 넣어서 0이 아닌 숫자 개수 구하기
    let arr = [0, 0]; // 0, 1은 소수가 아니니 0으로 채워두고 2부터 n까지 배열에 넣어준다
    for (let i = 2 ; i <= n ;  i++){
        arr[i] = i;
    }
    // 배수는 소수가 아니므로 배수의 인덱스에 0으로 바꾼다
    for(let i = 2 ; i <= n ; i++ ){
        if(arr[i] === 0) {
            continue;
        }
        for(let j = i * 2 ; j <= n ; j+= i){
            arr[j] = 0;
        }
    }
    // 0인 요소로만 이루어진(소수인) 배열의 길이 리턴
    return arr.filter(ele => {
       return ele !== 0;
    }).length;
}