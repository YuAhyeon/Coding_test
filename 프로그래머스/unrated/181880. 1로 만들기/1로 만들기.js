function solution(num_list) {
    let count = 0;
    
    for(num of num_list){
        while(num !== 1){
            if(num % 2 === 0) num /= 2;
            else if(num % 2 === 1) num = (num - 1) / 2;
            count += 1;
        }
    }
    
    return count;
}