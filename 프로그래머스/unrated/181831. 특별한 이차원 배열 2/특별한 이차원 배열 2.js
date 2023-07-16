function solution(arr) {
    const answer = 1;
    for(let i = 0, j = 0 ; i < arr.length ; i += 1) if(arr[i][j] !== arr[j][i]) return 0;
    return answer;
}