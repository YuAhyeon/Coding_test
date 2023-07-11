function solution(arr, n) {
    const arrLen = arr.length;
    
    if(arrLen % 2 === 0){
        return arr.map((e, idx) => idx % 2 === 1 ? e + n : e);
    }
    else if(arrLen % 2 === 1){
        return arr.map((e, idx) => idx % 2 === 0 ? e + n : e);
    }
}