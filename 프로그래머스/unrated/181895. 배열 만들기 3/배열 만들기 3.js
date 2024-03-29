function solution(arr, intervals) {
    const [a1, b1, a2, b2] = [...intervals[0], ...intervals[1]];
    return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}