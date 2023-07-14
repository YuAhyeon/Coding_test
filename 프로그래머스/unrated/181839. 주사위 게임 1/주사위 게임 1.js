function solution(a, b) {
    const a1 =  a % 2;
    const b2 =  b % 2;
    
    if(a1 && b2) return a ** 2 + b ** 2;
    else if(a1 || b2) return 2 * (a + b);
    else return Math.abs(a - b);
}