function solution(numbers) {
    // numbers의 요소끼리 한 번씩 도는 이중 for문 작성
    // 
    const result = [];
    for(let i = 0 ; i < numbers.length ; i++){
        const num1 = numbers[i]; // 첫번째로 뽑은 수
        for(let j = i+1 ; j < numbers.length ; j++){ // 처음으로 뽑은 수를 제외하고 뒤에 나오는 요소끼리 나올 수 있는 모든 수이기 때문에 초기값은 i+1로 설정 
            const num2 = numbers[j]; // 두번째로 뽑은 수
            const sum = num1 + num2; // 두 수를 더함
            
            if(result.includes(sum) === false){ // 결과 변수 배열에 두 수의 합이 없다면 결과에 push 해 주기 
                result.push(sum);
            }
        }
    }
    result.sort((a, b) => a - b);
    return result
}