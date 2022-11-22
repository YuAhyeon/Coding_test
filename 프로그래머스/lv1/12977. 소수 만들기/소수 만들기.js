function number(sum){ // 소수 판별 함수
    let primeNum = true;
    for(let i = 2 ; i < sum ; i++){
        if( sum % i === 0){
            primeNum = false;
        }
    }
    return primeNum;
}


function solution(nums) {
    // nums에서 3개의 수를 더했을 때 소수가 되는 경우의 개수
    // 모든 조합 먼저 구하기
    // 소수를 판별하는 함수 하나 만들고 true면 count
    
    let count = 0;
    // 1. 3개의 수 더한다고 했으니까 삼중for문 돌려잇
    // 2. 3개 수를 더하기
    // 3. 그 값을 소수 판별하는 함수에 매개변수로 넘겨주기
    let sum = 0;
    for(let i = 0 ; i < nums.length ; i++){ // 1
        for(let j = i+1 ; j < nums.length ; j++){
            for(let k = j+1 ; k < nums.length ; k++){
                sum = nums[i] + nums[j] + nums[k]; // 2 
                
                if(number(sum)){
                    count++;
                }
            }
        }
    }
    
    return count;
}