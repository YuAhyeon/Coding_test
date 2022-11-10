function solution(s) {
    // 단어 s의 가운데 글자를 반환하는 함수
    // 글자 수가 짝수면 가운데 두 글자 반환

    let odd = Math.floor(s.length/2); // 홀수일 때 출력 위치 2로 나누면 가운데 위치임
    let even = s.slice((s.length / 2)-1, (s.length / 2)+1) // 짝수일 때, slice를 사용
    return s.length % 2 === 1 ? s[odd] : even ;
}