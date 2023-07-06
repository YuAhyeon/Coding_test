function solution(myString, pat) {
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    const arr = myString.split(pat);
    return arr.length > 1 ? 1 : 0;
}