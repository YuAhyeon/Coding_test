function solution(a, b) {
    let sum = 0;
    //a와 b의 같은 인덱스 위치끼리 곱한 것들을 더한 것
    // 곱해야할 서로의 인덱스 위치는 같으니까 곱해서 sum에 더해 주기
    for(let i = 0 ; i < a.length ; i++){
        sum += a[i] * b[i]; 
    }
    return sum;
}