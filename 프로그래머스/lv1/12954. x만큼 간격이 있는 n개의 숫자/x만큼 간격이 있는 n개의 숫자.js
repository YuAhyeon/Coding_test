function solution(x, n) {
    // x부터 시작해서 + x씩 n개인 배열 리스트를 리턴
    // 빈 배열 arr 선언해 줘서 하나씩 넣어 보자!
    let arr = [];
    let first = x;
    // 배열 리스트의 요소의 개수는 n만큼
    for ( let i = 1 ; i <= n ; i++ ){
        arr.push(x);
        x += first; // 배열의 요소는 x만큼 증가
    }
    return arr;
}