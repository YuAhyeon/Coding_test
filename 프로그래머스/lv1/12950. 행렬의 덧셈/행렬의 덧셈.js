function solution(arr1, arr2) {
    let arr3 = Array(); // 행렬의 덧셈 결과를 나타내는 새로운 배열 arr3 선언
    for(let i = 0 ; i < arr1.length ; i++){ // 2차원 배열 arr1의 길이만큼 반복 , arr2의 길이만큼 해도 됨(arr1, arr2는 같은 행렬이기 때문...)
        let arr = [];  // arr3에 배열을 push 해 줄 거기 때문에 새 배열 선언
        for(let j = 0 ; j < arr1[i].length ; j++){ 
            arr.push(arr1[i][j] + arr2[i][j]); // 새 배열에 같은 위치에 있는 값들을 더해 줌
        }
        arr3.push(arr); // arr3에 push
    }
    return arr3;
}