function failureRate(unpassed, arrive){ // 실패율 구하는 함수
    return unpassed / arrive;
}

function solution(N, stages) {
    // 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어 === stage <= 스테이지에 도달한 플레이어
    
    // n을 돌면서 스테이지 filter로 stages 하나씩 돌아줌
    // 돌면서 n(i)이랑 같으면  uppassed , 같거나 arrive임  그걸 변수에 넣어서

    
    // 전체 스테이지(N)를 돌면서 filter로 stages의 요소도 하나씩 도는데 스테이지와 유저가 머문 스테이지가 같다면 unpassed, 유저가 머문 스테이지가 더 크거나 같으면 arrive
    // filter로 걸러 준 다음에 length로 플레이어 수를 구함
    // 실패율 구함
    // 2차원 배열로 0번째는 스테이지 번호, 1번째는 실패율
    
    let arr = [];
    let unpassed = 0;
    let arrive = 0;
    
    for(let i = 1 ; i <= N ; i++){
        let result = 0;
        const unpassed = stages.filter(ele => { // 스테이지에 도달했으나 클리어하지 못한 플레이어 수
            return ele === i;
        }).length;
        const arrive = stages.filter(ele => { // 스테이지에 도달한 플레이어 수
            return ele >= i;
        }).length;
        result = failureRate(unpassed, arrive); // 실패율
        arr.push([i, result])  // arr에 2차원 배열로 넣어줌
    }
    
    // 내림차순 정렬(b - a), 실패율은 1번 째 인덱스에 있으니까 정렬 기준으로 잡아 준다
    arr.sort((a, b) => {
        return b[1] - a[1]
    });
    
    // [i][0]만 뽑아오면 되므로 map 써서 배열 리턴
    return arr.map(ele => ele[0]);
    
    
}