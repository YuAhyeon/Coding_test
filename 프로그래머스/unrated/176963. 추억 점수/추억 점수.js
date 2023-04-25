function solution(name, yearning, photo) {
  /*
    그리움 점수 구하기
    name[0]과 yearning[0]은 한 쌍임. namy과 yearning 순서대로 서로 쌍을 이룸
    각 인물에 맞는 그리움 점수를 찾기
    1. photo에 name이 있는지 확인하기
    2. 있다면 해당 name 인덱스를 추출하여 yearning[찾은 인덱스]로 그리움 점수 +
    3. 없으면 넘어가기
    4. 한 배열이 끝나면 결과 배열에 push
  */
    
    const result = [];

    photo.map((arr) => {
      let missScore = 0;
      arr.forEach(ele => {
        const idx = name.indexOf(ele)
         if(idx >= 0) missScore += yearning[idx];
      });
      result.push(missScore)
    })
    
    return result;
  }

solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]])