function solution(d, budget) {
      
    // 1. d를 정렬하고
    // 2. 하나씩 더해서 총예산 초과하면 멈추고? 
    // 3. 더한 횟수 반환?
    d = d.sort(function(a, b) { // 1
        return a - b;
        });
    
    let count = 0;
    let sum = 0;
    
    for(let j = 0 ; j < d.length ; j++){ 
        sum += d[j];
        if( sum > budget){ 
            return count;
        }
        count++;   
    }
    return count
}