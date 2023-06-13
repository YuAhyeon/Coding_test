function solution(sides) {
  sides.sort((a, b) => a - b);
  const [min, max] = sides;
  let count = 0;

  for(let i = 1 ; i < min + max ; i++){
    // 가장 긴 변이 max인 경우
    if(min + i > max && i <= max){
      count++;
    }

    // 나머지 한 변이 가장 긴 변인 경우
    if( i < min + max && i > max ){
      count++
    }
  }

  return count;
}

solution([1, 2])