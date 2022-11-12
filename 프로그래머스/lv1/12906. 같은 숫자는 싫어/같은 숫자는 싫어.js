function solution(arr){
    let result = [];
    // 현재 위치와 다음 위치의 값이 같지 않으면 새 배열 result에 push 시켜 주기
    for(let i = 0 ; i < arr.length ; i++ ){
        if( arr[i] !== arr[i+1]){
            result.push(arr[i]);
        }
    }
    return result;
}

 
 // 중복된 숫자 제거하는 방법
 // let arr1 = new Set(arr);
 //    let new_arr = [...arr1];
 //    return new_arr;