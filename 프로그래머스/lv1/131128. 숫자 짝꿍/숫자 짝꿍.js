function solution(X, Y) {
  X = [...X]; //! ['1', '2', '3', '2', '1']
  Y = [...Y]; //! ['4', '2', '5', '3', '1']

  let result = "";

  for (let i = 0; i <= 9; i++) {
    //! 2 돈다고 치셈
    let x = X.filter((ele) => Number(ele) === i).length; //! 2
    let y = Y.filter((ele) => Number(ele) === i).length; //! 1
    result += String(i).repeat(Math.min(x, y)); //! 1번 2가 찍힘
  }

  //? 1. 짝꿍 없을 경우
  if (result === "") return "-1";
  //? 2. 모두 0인 경우
  if (Number(result) === 0) return "0";

  //? result = '123' / 정렬돼서 나와야 됨, 문자열 상태니까 다시 배열로 만들어 줌
  result = [...result];
  //! 정렬 순서가 문자열 유니코드 포인트를 따르기 때문에 Number 타입으로 정렬
  return result.sort((a, b) => Number(b) - Number(a)).join(""); 
}

solution("12321", "42531");
