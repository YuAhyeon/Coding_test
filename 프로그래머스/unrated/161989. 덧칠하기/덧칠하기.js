function solution(n, m, section) {
  // 구역 수만큼의 배열 생성
  const arr = Array.from(Array(n), (_, index) => index + 1);
  
  let paint = 0;
  
  /*
  배열 arr를 순회하면서 덧칠해야 할 구역을 만나면 m만큼 칠했다는 표시인 0으로 재할당
  전에 이미 칠해졌다면 0으로 변했을 것이므로 칠하지 않은 구역이 있다면 롤러의 길이인 m만큼 다시 칠하고 0으로 할당
  한 번 쭉 칠하면 paint 횟수 count
  */
 
  arr.forEach( (e, idx)=> {
    if(section.includes(e)){
      for(let i = 0 ; i < m ; i++){
        arr[idx+i] = 0; 
      }
      paint++
    }
  });

  return paint;
}

solution(8, 4, [2, 3, 6]);
// solution(5, 4, [1, 3]);
// solution(4, 1, [1, 2, 3, 4]);