function solution(survey, choices) {
  //! 1번 지표 라이언형(R), 튜브형(T)
  //! 2번 지표 콘형(C), 프로도형(F)
  //! 3번 지표 제이지형(J), 무지형(M)
  //! 4번 지표 어피치형(A), 네오형(N)

  //? 4를 기준으로 4면 0
  //? 4보다 작으면 0번째인덱스가 점수를 얻는다
  //? 4보다 크면 1번째 인덱스가 점수를 얻는다
  //? 같으면 지표 첫번째 순서에 있는  유형이 출력

  let personality = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let i = 0;
  for (let key of survey) {
    console.log(key); //!키
    console.log(choices[i]);

    choices[i] < 4 ? personality[key[0]] += 4 - choices[i] : personality[key[1]] += choices[i] - 4
    i++;
    console.log(personality)
    //! expected output = personality = {R: 0, T: 3, C: 1, F: 0, J: 0, M: 2, A: 1, N: 1}

    // if (choices[i] < 4) {
    //   if (choices[i] === 1)
    //   personality[key[0]] = personality[key[0]] + 3; //! 매우 비동의
    //   else if (choices[i] === 2)
    //   personality[key[0]] = personality[key[0]] + 2; //! 비동의
    //   else if (choices[i] === 3) personality[key[0]] = personality[key[0]] + 1; //! 약간 비동의
    // }
    // //? 4보다 크면 1번째 인덱스가 점수를 얻는다
    // if (choices[i] > 4) {
    //   if (choices[i] === 5)
    //     personality[key[1]] = personality[key[1]] + 1; //! 약간 동의
    //   else if (choices[i] === 6)
    //     personality[key[1]] = personality[key[1]] + 2; //! 동의
    //   else if (choices[i] === 7) personality[key[1]] = personality[key[1]] + 3; //! 매우 동의
    // }
    // i++;
    //? 4보다 작으면 0번째인덱스가 점수를 얻는다
  }

  let result = '';

  if (personality.R === personality.T) result += 'R';
  else {
    personality.R > personality.T ? (result += 'R') : (result += 'T');
  }
  console.log(personality);

  if (personality.C === personality.F) result += 'C';
  else {
    personality.C > personality.F ? (result += 'C') : (result += 'F');
  }

  if (personality.J === personality.M) result += 'J';
  else {
    personality.J > personality.M ? (result += 'J') : (result += 'M');
  }

  if (personality.A === personality.N) result += 'A';
  else {
    personality.A > personality.N ? (result += 'A') : (result += 'N');
  }

  console.log(result);
  return result;
}

// solution(["TR", "RT", "TR"], [7, 1, 3])
solution(["AN", "CF", "MJ", "RT", "NA"],	[5, 3, 2, 7, 5]);
