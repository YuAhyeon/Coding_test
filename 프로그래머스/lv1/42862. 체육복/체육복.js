function solution(n, lost, reserve) {
    
    // 전체 학생이 각자 가진 체육복 수를 1로 설정한다.
    const uniform = Array(n).fill(1); // 1 1 1 1 1
    // 도난당한 학생들의 체육복 수를 0으로 설정, 인덱스로 접근하기 때문에 학생 번호 - 1로 해야 됨 
    lost.map((lost) => {uniform[lost-1] = 0});
 
    
    
    // 여벌을 가진 학생들은 +1 해 준다.
    reserve.map(reserve => {uniform[reserve-1] += 1}); // 1 0 2 0 1

    for(let i=0; i<n; i++){ 
        // 체육복이 0개인 학생이 앞의 학생한테 체육복을 받으면.
        // 그 학생의 체육복 수를 +1로 하고 앞의 학생은 2개에서 하나를 줬기 때문에 -1을 해 준다.
        if(uniform[i] === 0 && uniform[i-1] ===2){
            uniform[i] += 1;                        // 1 0 1 1 1
            uniform[i-1] -= 1;
        }
        // 체육복이 0개인 학생이 뒤의 학생한테 체육복을 받으면.
        // 그 학생의 체육복 수를 +1로 하고 앞의 학생은 2개에서 하나를 줬기 때문에 -1을 해 준다.
        else if(uniform[i] === 0 && uniform[i+1] === 2){
            uniform[i] += 1;
            uniform[i+1] -=1;
        }
    }
    
    // 가진 체육복이 1개 이상인 학생들의 수를 리턴
    return uniform.filter(ele => ele > 0).length; // 1 0 1 1 1 => 4
}


// function solution(n, lost, reserve) {
//   //lost와 reserve 둘 다 번호가 있으면 reserve과 lost에서 제거해 줘야 됨
//   // 여벌을 가진 사람 중 도난당한 학생 빼줌
//   reserve = reserve.filter((ele) => !lost.includes(ele));
//   // 도난당한 사람 중에서 여벌을 가졌다면 빼줌
//   lost = lost.filter((ele) => !reserve.includes(ele));

//   for (let i = 0; i < reserve.length; i++) {
//     for (let j = 0; j < lost.length; j++) {
//       // 앞, 뒤 번호 학생한테 줄 수 있으면 해당 학생은 0으로 바꾼다
//       if (reserve[i] - 1 === lost[j] || reserve[i] + 1 === lost[j]) {
//         lost[j] = 0;
//         break;
//       }
//     }
//   }
//   // 도난당한 학생들의 배열에서 받을 수 있는 학생들은 0으로 바뀌었으므로
//   // 전체 학생 n에 체육복을 받지 못한 학생/ 0이 아닌 학생의 명 수를 구해서 빼준다

//   return n - lost.filter((ele) => ele !== 0).length;
// }



// function solution(n, lost, reserve) {

//   // 여벌을 가지고 있는 학생이 도난당하면 빌려줄 수 없으므로 lost와 reserve에 동시에 존재하면 reserve에 해당 학생 번호를 지워줌
//   //1.  lost와 reserve 둘 다 번호가 있으면 reserve에서 제거해 줘야 됨
// 여벌을 가졌지만 도난당한 학생을 제외한 배열을 다시 reserve에 재할당
//   reserve = reserve.filter((ele) => !lost.includes(ele)); 
//   //2.  여벌을 가지지도 않고 도난당하지도 않은 학생과 여벌을 가진 학생들은 체육수업을 들을 수 있으므로 도난당한 학생의 수만 전체 학생 수에 - 해 준다
//   let result = n - lost.length;
//   //3.  이미 체육복은 받은 학생이 여벌을 가진 학생에게 또 받으면 안 되기 때문에 받을 수 있는 학생들을 모두 push 후 set으로 중복 제거
//   //    그리고 중복제거한 배열의 길이를 result와 더한다.
//   let arr = [];

//   for (let i = 0; i < reserve.length; i++) {
//     for (let j = 0; j < lost.length; j++) {
//       if (reserve[i] - 1 === lost[j]) {
//         arr.push(lost[j]);
//         if (reserve[i] + 1 === lost[j]) {
//           arr.push(lost[j]);
//         }
//       }
//     }
//   }

//   // arr 중복 제거
//   const uniqueArr = [...new Set(arr)];
//   result += uniqueArr.length;
//   return result;
// }

// solution(5, [2, 4], [1, 3, 5]);
