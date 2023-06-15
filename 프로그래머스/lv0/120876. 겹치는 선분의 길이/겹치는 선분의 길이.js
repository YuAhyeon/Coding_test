function solution(lines) {
    let lineArr = new Array(200).fill(0);

    lines.forEach(([a, b]) => {
        for(; a < b; a++) lineArr[a+100]++;
    });

    return lineArr.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}