function solution(today, terms, privacies) {
  /*
  고객 약관 동의를 얻어 수집된 1  ~ n번으로 분류된 개인정보 n개가 있음
  약관마다 개인정보 유효기간 정해짐
  수집은 유효기간 전까지만 보관 가능
  ! 지나면 바로 파기~!

  A => 12달 2021.01.05 ~ 2022.01.04까지 보관


  terms[약관종류][유효기간]
  */

  today = Number(today.replaceAll('.', ''))
  console.log(today);

  terms = terms.map( e => e.split(' '))
  // console.log(terms);

    privacies = privacies.map( e => {
    e = e.split(' ');
    e[0] = e[0].split('.')

    console.log(e[1]);                        // 각 약관 종류에 맞는 유효기간 넣어주기
    for(let i = 0 ; i < terms.length ; i++){
      if(e[1] === terms[i][0]){
        e[1] = Number(terms[i][1])
      }
    }

    // console.log(e[0]);                       // 날짜 숫자로 바꿔주기
    for(let i = 0 ; i <= 2 ; i++){
      e[0][i] = Number(e[0][i])
    }
    return e;
  })
  // console.log(privacies);
  // privacies => 요소[개인정보 수집 일자[년][월][일]][약관종류]

  // console.log(privacies[0][0][0]); // 연
  // console.log(privacies[0][0][1]); // 월
  // console.log(privacies[0][0][2]); // 일

  
  // for(let i = 0 ; i < privacies.length ; i++){
  //   console.log(privacies[i]);
  //   console.log(privacies[i][1]);           // 유효기간
  //   console.log(privacies[i][0][1]);         // 월
  //   console.log(privacies[i][0][0]);         // 연
  //   let month = privacies[i][1] + privacies[i][0][1]  // 유효기간 + 월
  //   console.log(month);
    
  //   while(month > 12){
  //     privacies[i][0][0] += 1
  //     privacies[i][0][1] = month - 12
  //     month -= 12
  //   }
  // }
  // console.log(privacies);
  
  privacies.forEach( e => {
    console.log(e);
    console.log(e[1]);            // 유효기간
    console.log(e[0][1]);         // 월
    console.log(e[0][0]);         // 연
    let month = e[1] + e[0][1]
    e[0][1] = e[1] + e[0][1]   // 유효기간 + 월
    console.log(month);

    while(month > 12){
      e[0][0]++          // 연++
      e[0][1] = month - 12
      month -= 12
    }
  });

  console.log(privacies);

 privacies =  privacies.map( e => {
    console.log(e);
    console.log(e[0]);
    console.log(e[0][1]);        // 월
    console.log(e[0][2]);        // 일
    e[0][2] === 1 ? (e[0][2] = 28, e[0][1]--) : e[0][2]--;
    console.log(e[0][1] < 10);
    if(e[0][1] < 10) e[0][1] = `0${e[0][1]}`
    if(e[0][2] < 10) e[0][2] = `0${e[0][2]}`
    return e = Number(e[0].join(''))
  })
  
  console.log(privacies);
  console.log(today);

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



