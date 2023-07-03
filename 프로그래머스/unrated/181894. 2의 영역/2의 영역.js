function solution(arr) {
    const firstIdx = arr.indexOf(2);
    const laseIdx = arr.lastIndexOf(2);
    const answer = arr.slice(firstIdx, laseIdx + 1);
    return answer.length ? answer : [-1];
}