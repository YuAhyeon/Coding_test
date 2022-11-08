function solution(a, b) {
    // a와 b 사이에 속한 모든 정수의 합!
    // for문을 이용해서 a부터 b까지 돌리고, sum에다 더해주자!
    // 우선 a가 b보다 클 경우에도 사이의 값을 더해야 되므로 아래 for문의 초기값과 조건을 반대로 작성해 준다!
    let sum = 0; 
    
    if( a > b ){
        for(let i = b ; i <= a ; i++){
            sum += i;
        }
            return sum;
     }
    
    for(let i = a ; i <= b ; i++){
        sum += i;
    }
            return sum;
}