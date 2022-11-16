function solution(array, commands) {
    // 1. commands 배열을 순회한다.
    // 2. slice의 인덱스 값은 commands의 첫 배열의 첫번째 요소가 i, 두번째 요소가 j
    // 3. slice한 배열을 sort로 정렬
    // 4. 정렬한 배열에서 commands의 첫 배열의 세번째 요소가 k이므로 해당 인덱스를 결과 배열 변수에 push
    
    let result = [];
    for(let i = 0 ; i < commands.length ; i++){ // commands 배열 순회
        let arr = array.slice(commands[i][0]-1, commands[i][1])
        arr.sort((a, b) => a - b);
        result.push(arr[commands[i][2]-1]);
    }
    return result;
}
