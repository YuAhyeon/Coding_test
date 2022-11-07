function solution(n) {
    // n의 약수를 구하려면 n을 1부터 n까지 나눈 게 0이면 약수지 않을까?
    // for문을 이용해 1부터 n까지 돌리고 나누어 떨어지는 약수들을 answer에 넣자!
    let answer = 0;
    
    for (let i = 1 ; i <= n ; i++){
        if (n % i === 0 ){
            answer += i;
        }
    }
    
    return answer;
}
