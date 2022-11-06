function solution(n) {
    var answer = 0;
    // 7 조각으로 친절하게 나눠 주는데 먹을 사람 n명 있을 때 한 사람당 하나 이상 먹어야 됨
    
    return Math.ceil(n / 7);
}