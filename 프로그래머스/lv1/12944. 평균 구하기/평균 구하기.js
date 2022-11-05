function solution(arr) {
    // 배열 arr의 평균값을 구하기 위해서 arr의 요소 하나하나를 (for 사용)
    // 더해서 나누면 되지 않을까?
    // 요소를 다 더해서 배열의 길이만큼 나누기!
    var answer = 0;
    
    for (let i = 0 ; i < arr.length ; i++){
        answer += arr[i]
    }
    return answer / arr.length;
}