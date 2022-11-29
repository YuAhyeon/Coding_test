function solution(food) {
  //? (선수1) 1 2 2 3 3 3 물 3 3 3 2 2 1 (선수2)
  // [...선수1의 음식 배치, 0, ...선수 2의 음식 배치]으로 합치고 join('')
    
  // 1. 선수1의 음식 배치 구해서 선수2 때 그대로 활용해 reverse만 시켜 주기
  // 2. map을 이용해 각 요소의 나누기 2로 나온 몫으로 변환한다. => 각 선수에게 줄 수 있는 음식양
  // [1, 3, 4, 6] => [0, 1, 2, 3] 물, 첫번째음식, 두번째음식, 세번째음식
  // 3. 배열의 인덱스 === 음식 순서이므로 음식의 양만큼 인덱스가 반복되면서 새로운 배열에 push
  food = food.map((ele) => {
    return (ele = Math.floor(ele / 2));
  });

  let arr1 = [];
    
  for (let i = 0; i < food.length; i++) {
    // [0, 1, 2, 3]
    if (!!food[i]) { // 들어온 음식의 수가 0이라면 false이므로 실행하지 않음
      for (let j = 1; j <= food[i]; j++) {
        arr1.push(i); // 배열의 인덱스 === 음식 순서
      }
    }
  }

  // 선수2의 음식 배치, 선수1의 음식 배치 활용
  let arr2 = [...arr1];
  arr2.reverse();

  const result = [...arr1, 0, ...arr2];

  return result.join('');
}