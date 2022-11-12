function solution(n) {
    // 자연수 n이 주어지면 n을 3진법 상에서 앞뒤로 뒤집어서
    // 이걸 다시 10진법으로?
        
    // 1. n을 3진법으로 만들어 준다
    n = n.toString(3);
    // 2. reverse 시켜 준다
    n = n.split('');
    n = n.reverse();
    // 3. 10진법으로 만들어 준다
    n = n.join('');
    return parseInt(n, 3);
}