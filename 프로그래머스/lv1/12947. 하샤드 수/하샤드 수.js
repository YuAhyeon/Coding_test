function solution(x) {
    // 1. x의 자릿수의 합(sum) 구하기
    // 2. sum으로 x를 나누었을 때, 0이면 true 출력?
    
    // 합을 구하기 위해서 x를 문자열로 바꿔 준다.
    x = x.toString();
    // for문을 돌려 x의 자릿수의 합을 구한다.
    let sum = 0;
    for (let i = 0; i < x.length ; i++){
        sum += Number(x[i]);
    }
    
    // sum으로 x를 나눈 나머지가 0이면 true
    if ( x % sum === 0){
        return true;
    }
        else{
            return false;
        }
}