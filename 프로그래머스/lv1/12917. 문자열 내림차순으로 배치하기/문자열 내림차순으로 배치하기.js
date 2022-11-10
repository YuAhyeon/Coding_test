function solution(s) {
    // 문자를 배열로 나눈다 split 사용
    // 정렬을 하고? sort 사용 reverse를 해 준다...
    // 문자열로 합치기 join 사용
    s = s.split("");
    s = s.sort();
    s = s.reverse();
    
    return s.join('');
    
    
    
}