function solution(s, n) {
    // 1. 공백일 경우에는 밀어도 공백
    // 2. 공백이 아닐 경우: 문자열 s를 아스키 코드로 변환해 준다.
    // 3. 대문자인지 판별, 아스키코드 대문자의 범위는 90까지이다.
    // 4. 대문자 아스키코드에서 n을 더했을 때 90이 넘으면 안 되기 때문에 -26을 해 준다.
    // 5. 소문자 범위는 91~ 121까지이다.
    // 6. 아스키코드에서 문자로 변환해 준다.
    
    let result = '';
    
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === ' '){ // 1
            result += ' ';
        }
        else {
        let char = s.charCodeAt(i); // 2
        if(char <= 90){ // 3
            char += n;
            if(char > 90){ // 4
                char -= 26;
            }
        }
        else { // 소문자일 때
            char += n;
            if(char > 122){ // 5
                char -= 26;
            }
        }
            result += String.fromCharCode(char); // 6
        }
    }
    return result;
}