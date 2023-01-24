function solution(today, terms, privacies) {
  /*
  각 개인정보마다 약관 종류에 맞는 유효기간 날짜를 구한 뒤
  하루 전 날짜를 기준으로 오늘 날짜와 비교해서 오늘 날짜가 더 크다면 유효기간이 지난 것임
  terms[약관종류][유효기간]
  */


  /* "2022.05.19" => .을 공백으로 바꾼 뒤 숫자로 변환
   각 개인정보들도 이와 같은 방법으로 
   개인정보 수집 일자를 기준으로 유효기간 마지막날을 구해
   숫자 타입끼리 비교할 계획
  */
  today = Number(today.replaceAll('.', ''))
  console.log(today);

  // [[유형][유효기간]]
  terms = terms.map( e => e.split(' '))
  console.log(terms);


  privacies = privacies.map( e => {         // 다음과 같이 들어온 개인정보 e => "2021.05.02 A"
  e = e.split(' ');                         // [날짜][약관종류] => [['2021.05.02'], ['A']]
  e[0] = e[0].split('.')                    // 날짜를 .기준으로 나누기 [['2021', '05', '02'], ['A']]
  console.log(e);
  console.log(e[1]);                        // e => e[날짜][약관종류]                
  for(let i = 0 ; i < terms.length ; i++){  // 각 약관 종류에 맞는 유효기간 넣어주기
    if(e[1] === terms[i][0]){               //   terms[[유형][유효기간]]
      e[1] = Number(terms[i][1])
    }
  }

  console.log(e[0]);                       // 날짜 숫자로 바꿔주기
  for(let i = 0 ; i <= 2 ; i++){
    e[0][i] = Number(e[0][i])
  }
  return e;
  })
  
  console.log(privacies);

  //! 유효기간 딱 ! 지난 날짜
  privacies.forEach( e => {       // e => e[날짜][유효기간]
    console.log(e);               // 개인정보 묶음
    console.log(e[1]);            // 유효기간
    console.log(e[0][1]);         // 월
    console.log(e[0][0]);         // 연
    let month = e[1] + e[0][1]    // 수집한 달 + 유효기간
    e[0][1] = e[1] + e[0][1]      // 유효기간 + 월
    console.log(month);

    while(month > 12){            // 12월이 넘어가면 +1년 이기 때문에 month가 12보다 클 때만 실행
      e[0][0]++                   // 연++
      e[0][1] = month - 12        // 1년 지났으니까 달은 -12달
      month -= 12                 // while 반복
    }
  });

  console.log(privacies);

  //! 보관 가능한 날짜 구하기 => 유효기간 지난 날 -1일
  privacies =  privacies.map( e => {       // e => e[날짜][유효기간]
    console.log(e);                        // 개인정보 묶음
    console.log(e[0][1]);                  // 월
    console.log(e[0][2]);                  // 일
    e[0][2] === 1 ? (e[0][2] = 28, e[0][1]--) : e[0][2]--; //! 1일이라면 ? (true) 달: -1 , 일: 28일  : (false) 일: -1
    console.log(e[0][1] < 10);                // 월과 일이 한 자리수라면 앞에 0 붙이기
    if(e[0][1] < 10) e[0][1] = `0${e[0][1]}`  // 월
    if(e[0][2] < 10) e[0][2] = `0${e[0][2]}`  // 일
    console.log(e);
    return e = Number(e[0].join(''))          // 다 붙이고 숫자 타입으로 변환
  })
  
  // privacies => 보관 가능한 마지막날로만 구성된 배열
  console.log(privacies);

  // today => 오늘 날짜
  console.log(today);

  // 서로 number 타입이니 보관 가능한 마지막날보다 오늘 날짜가 더 크다면 해당 인덱스에 +1한 번호를 push
  // 번호는 1부터 시작이므로 인덱스 +1임
  const result = [];
  privacies.forEach( (e, idx) => {
    if(e < today){
      result.push(idx + 1)
    }
  });

  console.log(result);
  return result
}

solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]) // expect output => [1, 3]

// solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]) // expect output => [1, 4, 5]



