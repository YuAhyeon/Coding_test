function solution(n)
{   // n을 하나하나 보기 위해서는 타입을 string으로 바꿔 줘야 되지 않을까?
    // 문자열로 바꿔 주기 위해서 .toString()을 쓰고
    // for문을 써서 더해 주자
    let answer = 0;
    let string = n.toString()
    for (let i = 0 ; i < string.length ; i++){
        // answer += string[i]; 로 했더니 안 돼서 생각을 해 보니
        // 숫자로 변환을 해 줘야 됐다!!
        answer += Number(string[i]);
    }

    return answer;
}