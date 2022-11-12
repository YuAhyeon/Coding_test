// function solution(n, m) {
//     let gcd = qwe(n, m);
//     let lcm = (n * m) / gcd;
//     // 최소 공배수 공식 적용
//     return [gcd, lcm];
    
//     // 최대 공약수: a, b를 서로 나눴을 때 나머지가 0이면 b가 최대 공약수임
//     // 유클리드 호제법 사용한 코드
//     function qwe(n, m){
//          if (m === 0) return n;
//              return n > m ?  qwe(m, n % m) : qwe(n, m % n);
//     // n, m으로 나누어지지 않으면 a랑 b로 나눈 나머지로 다시 나눔
//     }
// }

function solution(a, b){
    // 최대 공약수 구하기
    let n = a; // 작은 수
    let m = b; // 큰 수
    
    if(a > b){ n = b; m = a;}
    else {n = a; m = b;}
    
    let gcd = 1;
    
    for(let i = 1 ; i <= n ; i++){
        if( n % i === 0 && m % i === 0)
        { gcd = i; }
    }
    
    let lcm = (n * m) / gcd;
    return [gcd, lcm];
    
}
