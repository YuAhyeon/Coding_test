function solution(arr, divisor) {
    // divisor로 나눠지는 arr의 요소를 오름차순으로 정렬한 배열 반환하기!
    // divisor로 나눠지는 arr의 요소들로 구성된 배열 하나를 만들기
    let divide = []; 
    
    // divisor로 나눠지면 새로운 배열 divide에 push!
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % divisor === 0){
            divide.push(arr[i]);
        }
    }
    
    // divide에 요소가 하나도 없다면 [-1] 반환
    if( divide.length === 0){ 
        return [-1];
    }
    // sort 메소드, 클로저를 사용하여 오름차순으로 정렬
    divide.sort(function(a, b){
        return a - b;
    });
    // 배열 반환
    return divide;
}