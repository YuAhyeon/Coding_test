function solution(num) {
    //var answer = "";
    // num을 2로 나누었을 때 나머지가 0이면 짝수, answer는 Even!
    //if ( num % 2 === 0){
        //answer = "Even"
   //}
    // num을 2로 나누었을 때 나머지가 1이면 홀수, answer는 Odd!
        //else if ( num % 2 === 1){
            //answer = "Odd";
        //}
//return answer; // answer로 출력!
// 무슨 이유인지... 위 코드로 실행하면 틀렸다고 나옴
    //그래서 다른 방법인 삼항 연산자를 써 보겠음
    
    return num % 2 === 0 ? "Even" : "Odd";
}