function solution(seoul) {
    //우선 Kim을 찾아야 되기 때문에 배열 seoul의 요소를 하나하나 살펴 보자
    for(let i = 0 ; i < seoul.length ; i++){
        if(seoul[i] === 'Kim'){ // seoul의 i의 값이 'Kim'과 같으면 문자열 출력!
            return `김서방은 ${i}에 있다` // i는 인덱스의 위치이므로 김서방은 i에 있다로 해 준다.
        }
    }
    }