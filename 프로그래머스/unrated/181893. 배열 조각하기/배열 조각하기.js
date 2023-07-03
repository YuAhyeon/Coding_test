function solution(arr, query) {
    query.forEach((e, idx) => {
        if(idx % 2 === 0) arr = arr.slice(0, e + 1);
        if(idx % 2 === 1) arr = arr.slice(e, arr.length);
    }); 
    return arr;
}