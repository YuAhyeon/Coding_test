function solution(answers) {
    // 정답지 answers가 주어짐
    // 일포자: 1 2 3 4 5 순서대로 찍음
    // 이포자: 2를 고정으로 하고 뒤에 오는 수는 1, 3, 4, 5로 순서대로 찍음
    // 삼포자: 33 11 22 44 55 // 순으로 찍음
    // 한 한생씩 돌게 해서 카운트 먹여 주고 거기서 카운트 수가 가장 높은 걸 리턴
    
    // 2차원 배열로 수포자 시험지 모아두고 하나씩 채점해 보자
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const math_test = [[...first], [...second], [...third]];
    
    let score = [];
    for(let student of math_test){ // 수포자 학생들의 정답 맞혔을 때 acc++ 해 줌, 맞힌 개수를 score에 push
        score.push(answers.reduce((acc, cur, idx) => {
            cur === student[idx % student.length] ? acc++ : acc;
            return acc;
        }, 0));
    };
    
    let max = Math.max(...score); // 가장 높은 점수 받은 사람
    let result = [];
    for(let i = 0; i < score.length ; i++){ // 최고 점수를 받은 사람의 인덱스를 가지고 와서 결과 배열에 넣어 줌
        if( max === score[i]){
            result.push(i+1);
        }
    }
    return result.sort((a, b) => a - b);
    
}