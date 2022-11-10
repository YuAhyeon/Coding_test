function solution(n) {
    let odd = '수';
    let even = '박';
    let result = '';
    // 1부터 n까지 돌면서 홀수면 '수'를 추가하고, 짝수면 '박'을 추가
    for(let i = 1 ; i <= n ; i++ ){
        i % 2 === 1 ? result += odd : result += even ;
    }
    return result;
}