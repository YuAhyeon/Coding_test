function solution(n) {
    // 자연수를 받았으니 하나하나 배열의 요소로 사용하기 위해서
    // n을 문자열로 변환하자!
    n = n.toString();
    // 새로운 배열 안에 for문을 사용해 반대로 push를 해 주면 되지 않을까?
    var answer = [];
    
    for(let i = n.length-1 ; i >= 0 ; i--){
        answer.push(Number(n[i]));
    }
    return answer;
}