function solution(absolutes, signs) {
    let sum  = 0;
    // absolutes와 signs의 길이는 같으므로 둘 중 하나의 인덱스 길이만큼 for문을 돌린다.
    // signs[i]번 째에 있는 게 true라면 변수 sum에 더해 주고 아니라면 음수이므로 빼 준다.
    for(let i = 0 ; i < absolutes.length ; i++){
        if(signs[i]){
            sum += absolutes[i];
        }
        else{
            sum -= absolutes[i];
        }
    }
    return sum;
}