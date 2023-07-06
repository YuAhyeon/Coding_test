function solution(strArr) {
    return strArr.map((str, i) => {
        if(i % 2 === 0) return str.toLowerCase();
        else if(i % 2 === 1) return str.toUpperCase();
    });
}