function solution(numbers, hand) {


  let useHand = "";
  let left_location = '*'; //? 왼손 위치
  let right_location = '#'; //? 오른손 위치
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      //! 1 4 7 왼손
      left_location = numbers[i]; // 위치 바꿔 주기
      numbers[i] = "L";
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      //! 3 6 9 오른손
      right_location = numbers[i]; // 위치 바꿔 주기
      numbers[i] = "R";
    } else {
      //! 2 5 8 0일 때
      useHand = distance_fuc(numbers[i], left_location, right_location, hand);
      // 숫자를 누를 손이 왼손일 경우에 왼손 위치를 바꿔 줌 
      if (useHand === "L") {
        left_location = numbers[i];
      } else { // 오른손일 경우에 오른손 위치 바꿔 줌
        right_location = numbers[i];
      }

      numbers[i] = useHand;
    }
  }
  return numbers.join("");
}

// destination = 눌러야하는 숫자
// leftH = 현재 왼손 위치
// rightH = 현재 오른손 위치
// myhand = 어느 손잡이인지
function distance_fuc(destination, leftH, rightH, myhand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  let dtn = [];
  let left = [];
  let right = [];

// 눌러야 할 숫자 5의 위치   [1, 1]
// 왼손의 위치가 4일 때 위치 [1, 0]
//                         0 + 1   = 1차이
// 눌러야 할 숫자 5의 위치   [1, 1]    
// 왼손의 위치가 4일 때 위치 [0, 2]
//                        1 + (-1)    = 2차이  
// 마이너스로 나올 수 있으므로 Math.abs 절대값으로 변환해서 거리 비교
    
    
  //! 목적지 위치, 왼손 위치, 오른손 위치 구하기
  for (let i = 0; i < keypad.length; i++) {
    //? 1차원으로 돌기
    for (let j = 0; j < keypad[i].length; j++) {
      //? 2차원 돌기
      if (keypad[i][j] === destination) {
        // 목적지 위치
        dtn.push(i, j);
      }
      if (keypad[i][j] === leftH) {
        // 왼손 위치
        left.push(i, j);
      }
      if (keypad[i][j] === rightH) {
        // 오른손 위치
        right.push(i, j);
      }
    }
  }
    
  //! 두 손의 거리 구하기
  // (목적지 0번째 - 왼쪽0번째) + (목적지 1번째 - 왼쪽 1번째)
  let left_distance = Math.abs(dtn[0] - left[0]) + Math.abs(dtn[1] - left[1]); 
  // (목적지 0번째 - 오른쪽0번째) + (목적지 1번째 - 오른쪽 1번째)
  let right_distance = Math.abs(dtn[0] - right[0]) + Math.abs(dtn[1] - right[1]); 

  //! 더 짧은 거리 사용한 손으로 리턴해 주기
  if (left_distance === right_distance) {
    return myhand[0].toUpperCase();
  } else if (left_distance < right_distance) {
    return "L";
  } else {
    return "R";
  }
}


solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
