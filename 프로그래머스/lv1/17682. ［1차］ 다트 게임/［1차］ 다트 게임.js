function solution(dartResult) {

    // 1. 숫자일 경우
    // 2. 보너스일 경우
    // 3. 옵션일 경우
    
    let score = 0;
    let bonus = []; // 차곡차곡쓰,,, 쌓이게 됨 ^^
    
    for(let i = 0 ; i < dartResult.length ; i++){
        // 10점일 때
        // 전 인덱스가 1이면 10임 그러면
        // true면 10 넣어주고 false면 dartResult[i]
        if(!isNaN(dartResult[i])){
           score = Number(dartResult[i-1]) === 1 ? 10 : Number(dartResult[i]);
           } else if(dartResult[i] === "S"){ // 보너스 S일 때
               bonus.push(score);
           } else if(dartResult[i] === "D"){ // 보너스 D일 때
               bonus.push(Math.pow(score, 2));
           } else if(dartResult[i] === "T"){ // 보너스 T일 때
               bonus.push(Math.pow(score, 3));
           } else if(dartResult[i] === "*"){ // 옵션 *일 때
               bonus[bonus.length-2] = bonus[bonus.length-2] * 2; // 기회는 3번이기 때문에 두번째나 세번째 기회일 때 앞에 점수를 중첩으로 *2 해 줘야됨
               bonus[bonus.length-1] = bonus[bonus.length-1] * 2;
           } else if(dartResult[i] === "#"){ // 옵션 #일 때(해당 점수 마이너스)
               bonus[bonus.length-1] = -1 * bonus[bonus.length-1];
           }
    }
    
    let result = 0;
    result = bonus.reduce((a, c) =>{
        return a + c;
    }, 0);
    
    return result;
}