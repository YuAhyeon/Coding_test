function solution(ingredient) {
    // 조인하고 넣은 재료 수만큼 반복 돌려서 정규식으로 거르자 (실패! 시간 초과)
    // 조인하고 split 기준으로 1231 나눠보자 (위랑 똑같을 것 같음)
    // 스택? 으로 풀어보셈
    // 하나씩 넣어서 마지막 -4번째 인덱스까지가 1231이면 pop 4번 ㄱ
  
    //! 빵 - 야채 - 고기 - 빵
  //! 1 === 빵
  //! 2 === 야채
  //! 3 === 고기
  //? 1-2-3-1 순으로 쌓인 햄버거만 포장해야 됨

 const pack =[];
    let cnt = 0;

// let i = ingredient.slice(-4);
// console.log(i)

 for(let i of ingredient){
    //! 재료를 하나씩 넣는다
    pack.push(i)
    //! 4가지 이상의 재료가 들어가면 마지막 -4번째 인덱스까지가 1231이면 pop 4번
    if(pack.length >= 4){
        const hamburger = pack.slice(-4).join('');
        // console.log(hamburger);
        if( hamburger === '1231'){
        cnt++;
        pack.pop();
        pack.pop();
        pack.pop();
        pack.pop();
        }
    }
}
    console.log(cnt)
    return cnt;
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1])