// function solution(s) {
//     let length = s.length
//     if (length === 4 || length === 6){ // 길이가 4 혹은 6이고
//         // 문자열이 숫자인지 확인하는 방법으로 Number() 사용
//         if(s.match([/a-zA-Z/g === null])){  // 숫자로만 구성됐다면 true 리턴
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     return false; // 나머지는 다 false
// }

// Number()는 인자로 전달된 문자열이 숫자일 때 Number 객체가 리턴되고, 숫자가 아니면 NaN이 리턴됩니다. !을 두번 붙이면 NaN은 false가 되며, Number는 true가 됩니다.
// 출처 https://codechacha.com/ko/javascript-check-if-val-is-number/

// 문자열이 숫자인지 판별하는 방법 
// Number(), !isNaN() 둘 다 테스트만 통과 되고 빠꾸 먹음 사유: 모르겠음


function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}