function solution(lottos, win_nums) {
    
    const ranking = [6, 5, 4, 3, 2, 1];
    let result = [];
    
    // 맞힌 번호로만 구성된 배열의 길이를 구해서 맞힌 번호의 수를 구한다
    let same = lottos.filter( ele => win_nums.includes(ele)).length;
    
    // 0으로만 구성된 배열의 길이를 구해서 0의 개수를 구한다
    let zero = lottos.filter( ele => ele === 0).length;
    
    // 최고 순위 구하기(최고 순위는 내가 맞힌 번호의 수 + 0의 개수)
    let best = same + zero
    best === 1 || best === 0 ? result.push(ranking[0]) : result.push(ranking[best-1])
    
    // 최저 순위 구하기
    same === 1 || same === 0 ? result.push(ranking[0]) : result.push(ranking[same-1]);
        
    return result;
}