function solution(num_list) { // 매개변수는 정수가 담긴 리스트
    var answer = [];
    let a = 0; //짝수
    let b = 0; //홀수
    for(i = 0 ; i < num_list.length ; i++){
        if (num_list[i] % 2 === 0){ // 짝수일 때
            a++;
        }
        else if (num_list[i] % 2 === 1){ // 홀수일 때
            b++;
        }
    }
    
    answer[0] = a;
    answer[1] = b;
    return answer;
}