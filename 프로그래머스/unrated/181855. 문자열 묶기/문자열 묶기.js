function solution(strArr) {
    const lenCounts = {};
    
    for(let i = 0 ; i < strArr.length ; i += 1){
        const len = strArr[i].length;
        lenCounts[len] = (lenCounts[len] || 0) + 1;
    }
    
    return Math.max(...Object.values(lenCounts));
}