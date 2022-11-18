function solution(s) {
    
    let str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let num = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    // 입력받은 문자열이 전부 숫자면 Number()로 리턴해 주고
    // 입력받은 문자열이 전부가 숫자가 아닌 경우
    // s에 replace를 해 준다  
    while(isNaN(s)){ // 원래 if로 했었는데 제한 시간 때문에 while로 바꾸니 성공했다.
        for(let i = 0 ; i < str.length ; i++){ // str의 요소를 순회
            s = s.replace(str[i], num[i]); // s 문자열의 str의 i번째 요소를 num의 i번째 요소로 바꾼다.
        }
    } 
    
    return Number(s);
    
}