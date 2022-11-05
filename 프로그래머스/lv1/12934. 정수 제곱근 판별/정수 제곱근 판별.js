function solution(n) {
    // 입력받은 n의 제곱근을 구하여 sqrt에 할당해 준다
    let sqrt = Math.sqrt(n);
    // n의 제곱근인 sqrt가 1로 나누었을 때 0이랑 같지 않으면 소수점이 있는 거니까 양의 정수 제곱근이 아니다. -1 리턴!
    if ( sqrt % 1 !== 0){
        return -1;
    }
    else { // 제곱근의 +1한 거듭제곱 해 주기
        return Math.pow(sqrt+1, 2)
        // = return (sqrt + 1) * (sqrt + 1)
    }
}