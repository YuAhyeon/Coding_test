/*
    1. 문자열을 하나씩 for문으로 돈다.
    2. 하나의 요소에 repeat 메서드를 통해 반복해야 할 count를 매개변수 n으로 줘서 문자열 합치기
    3. 리턴
*/

function solution(my_string, n) {
    let result = '';

    for(i = 0 ; i < my_string.length ; i++){
        result += my_string[i].repeat(n);
    }
    return result;
}

solution('hello', 3)