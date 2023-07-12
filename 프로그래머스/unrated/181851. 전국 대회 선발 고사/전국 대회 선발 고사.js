function solution(rank, attendance) {
    const arr = rank.map((r, i) => attendance[i] ? [r, i] : 0).filter(r => r !== 0).sort((a, b) => a[0] - b[0]);
    const [a, b, c] = arr;
    return 10000 * a[1] + 100 * b[1] + c[1];
}