function solution(s) {
    // 공백을 기준으로 홀짝을 판단해야 하므로 split으로 구분해 주기
    let arr = s.split(' '); // ['try', 'hello', 'world']
    let result = '';
    
    for( let i = 0 ; i < arr.length ; i++ ){ // ['try', 'hello', 'world'] 하나하나씩 돈다.
        for( let j = 0 ; j < arr[i].length ; j++){ // ex) 'try'일 때 0 1 2 돈다. 
            if( j % 2 === 0) {
                result += arr[i][j].toUpperCase(); // 위치가 짝수면 대문자
            } 
            else {
                result += arr[i][j].toLowerCase(); // 위치가 홀수면 소문자
            }
        }
        
        if ( i  <  arr.length-1 ) // 한 단어가 끝나는 곳에 공백을 추가해야 되기 때문에 마지막 위치에서 -1한 곳까지만 추가
            result += " ";
    }
    return result;
}