function solution(babbling) {
  //! 할 수 있는 발음 ["aya", "ye", "woo", "ma"]
  // 연속으로 안 되는 발음
  const continuous = ["ayaaya", "yeye", "woowoo", "mama"];

  let result = 0;
  // ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]
  for (let i = 0; i < babbling.length; i++) {
    //! 연속으로 발음되는 문자열이 포함됐다면, 다음으로 넘어가야 됨.
    for (let talk of continuous) {
      if (babbling[i].includes(talk)) {
        // 현재 순회 중인 요소를 발음할 수 없는 상태인 false로 바꿈
        babbling[i] = false;
        break;
      }
    }

    // 요소가 할 수 없는 발음(false)인 경우 다음 요소로 넘어감
    if (!babbling[i]) continue;

    //! 할 수 있는 발음을 숫자로 바꾸어 준다.
    //? aya = 1 , ye = 2, woo = 3, ma = 4
    babbling[i] = babbling[i]
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");

    //! 숫자를 공백으로 바꿔 준다.
    babbling[i] = babbling[i].replaceAll(/[1234]/g, "");

    if (babbling[i].length === 0) result++;
  }

  return result;
}

solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
