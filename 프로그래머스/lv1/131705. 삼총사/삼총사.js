function solution(number) {
    // ㅈㄴ 어렵네
    // 1번째 for문, 초기값: 0번째 인덱스부터 시작해서
    // 2번째 for문, 초기값: 1번째 for문의 초기값 + 1번째 인덱스부터 끝까지
    // 3번째 for문, 초기값: 2번째 for문의 초기값 + 1번째 인덱스부터 끝까지
    // 3번째 for문에서 1, 2, 3 끼리 더해서 0이면 count++
    // count를 return
    
    let count = 0;
    
    for(let i = 0 ; i < number.length ; i++){
        for(let j = i+1 ; j < number.length ; j++){
            for(let k = j+1 ; k < number.length ; k++){
                if(number[i] + number[j] + number[k] === 0){
                    count++;
                }
            }
        }
    }
    return count;
}