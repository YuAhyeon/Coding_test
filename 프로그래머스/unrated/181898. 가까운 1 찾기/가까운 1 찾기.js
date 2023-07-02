function solution(arr, idx) {
    for(let i = 0 ; i < arr.length ; i += 1){
        if(i >= idx && arr[i]) return i;
    }
    
    return -1;
}