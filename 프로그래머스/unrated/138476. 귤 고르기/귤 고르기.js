function solution(k, tangerine) {
  // 경화는 과수월에서 귤을 수확
  // 수확한 귤 중 k개를 골라서 상자 하나에 담아 판매하려고 함
  // 수확 귤의 크기가 일정하지 않아서 크기별로 분류해 서로 다른 종류의 수를 최소화하고 싶어함
  //  [1, 3, 2, 5, 4, 5, 2, 3] 

  // 5 5 2 2 3 3


  // 각자 귤의 개수를 구해서 많은 순서대로 넣기


  // 크기별로 객체 만들어 주기
  let size = {};
  for(let type of tangerine){
    // 귤의 크기 객체 속성이 없다면 키를 만들어 주고 초기 키값으로 0으로 설정
    //? hasOwnProperty(): 파라미터로 전달된 속성이 객체에 존재하면 true 반환
    if(!size.hasOwnProperty(type)){
      size[type] = 0;
    }
    size[type] += 1
  }
  // 키값만 가지고 오기
  size = Object.values(size);
  console.log(size)
  // 최소한의 종류를 넣으려면 크기가 큰 것부터 넣으면 됨
  size.sort((a, b) => b - a);
  console.log(size)
  
  let result = 0;
  for (const ele of size) {
    result += 1;
    k -= ele;
    
    if (k <= 0) break;
}
  console.log(result)
  return result;

}

solution(4, [1, 3, 2, 5, 4, 5, 2, 3])