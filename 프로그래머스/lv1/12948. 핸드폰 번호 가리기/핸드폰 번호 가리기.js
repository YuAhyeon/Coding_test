function solution(phone_number) {
    // 뒤에 4자리를 제외한 나머지 모두 '*'로
    let cover = ''; // 뒤 4자리를 제외한 앞을 *로 채워 넣을 변수
    let number = phone_number.slice(-4); // 나머지 4자리
    for(let i = 0 ; i < phone_number.length-4 ; i++){ // i가 phone_number.length-4까지 돌면서 *를 추가
        cover += '*';
    }
    return cover + number; //별을 채워 넣은 부분(cover)과 마지막 4자리 숫자(number)를 합쳐서 리턴
}