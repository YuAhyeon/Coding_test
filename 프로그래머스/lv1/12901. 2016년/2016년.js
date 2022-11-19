function solution(a, b) {
    // a월 b일이 총 몇 일인지 먼저 구하기
    // 7로 나눈 나머지 번째 요일?
    
    // 29일: 2,
    // 30일: 4, 6, 9, 11
    // 31일: 1, 3, 5, 7, 8, 10, 12
    
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let day_sum = 0;
    
    for(let m = 0; m < a ; m++){
        day_sum += month[m]
    } 
    
    day_sum += (b + 4) ; // 모든 일수를 더함
    day_sum = day_sum % 7; // 7로 나눔...
    
    // 결과값이 다르게 나와서!! 생각해 보니까 1월 시작이 금요일부터 시작이라 총일수에 +4를 해 준다!
    return day[day_sum]

        
}