function solution(myString, pat) {
    myString = [...myString].map(str => str === 'A' ? 'B' : 'A').join('');
    return myString.includes(pat) ? 1 : 0;
}