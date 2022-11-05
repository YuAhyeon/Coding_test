function solution(s){
    // 대소문자가 섞인 파라미터 s를 대문자나 소문자로 전부 바꾸기
    s = s.toLowerCase();
    // 'p'와 'y'의 개수 구하기
    // .split()을 사용하여 그 길이의 -1는 개수
    let p = s.split('p').length - 1;
    let y = s.split('y').length - 1;
    // 'p'와 'y'의 개수가 같지 않은 경우만 false, 나머지는 true
    if ( p !== y ){
        return false;
    }
        else{
            return true;
        }
}