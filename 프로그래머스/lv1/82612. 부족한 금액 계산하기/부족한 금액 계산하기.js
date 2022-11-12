function solution(price, money, count) {
    //카운트만큼... n배된 price를 더해 줘야 한다
    //for문을 카운트만큼 돌리고 더해 준다...
    let sum = 0;
    for(let i = 1 ; i <= count ; i++){
            sum += price * i;
    }
    
    return money < sum ? sum - money : 0;
    
        
}