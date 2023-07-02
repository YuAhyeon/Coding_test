function solution(start, end) {
    const answer = [];
    for(let i = start ; i >= end ; i -= 1){
        answer.push(i);
    }
    return answer;
}