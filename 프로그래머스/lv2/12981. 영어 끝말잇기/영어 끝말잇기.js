function solution(n, words) {
  //? 앞에 말한 단어의 마지막 문자로 시작하는 단어 말하기
  //! 가장 먼저 탈락하는 사람 번호, 몇 번째 차례인지
  // 지금까지 말한 단어는 connectGame push 시켜 줘서 현재 단어가 connectGame에 있다면 탈락
  //
  let connectGame = [words[0]];
  console.log(connectGame);
  //? 첫번째는 바로 통과
  for (let i = 1; i < words.length; i++) {
    const before = words[i - 1];
    const current = words[i];

    //! 현재 단어의 첫글자가 전 글자의 마지막 글자와 같은지 비교
    if (
      current.at(0) === before.at(-1) &&
      connectGame.indexOf(current) === -1
    ) {
      connectGame.push(current);
    } else {
      //? [탈락 번호, 몇 번째 차례]
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }
  //? 탈락자가 없으면 [0, 0]
  return [0, 0];
}

solution(3, [
  'tank',
  'kick',
  'know',
  'wheel',
  'land',
  'dream',
  'mother',
  'robot',
  'tank',
]);



// function solution(n, words) {
//   let connectGame = [words[0]];
//   let turn = 1;

//   for (let i = 1; i < words.length; i++) {
//     const before = words[i - 1];
//     const now = words[i];

//     //? 전에 말한 단어 사용하면 탈락
//     if (connectGame.includes(now)) {
//       break;
//     }

//     //! 현재 단어의 첫글자가 전 글자의 마지막 글자와 같은지 비교
//     if (now.at(0) === before.at(-1)) {
//       connectGame.push(words[i]);
//       turn++;
//     }

//     if(connectGame.length === words.length) return [0, 0]
//   }

//   //? [탈락 번호, 몇 번째 차례]
//   return [(turn % n) + 1, Math.ceil(turn / n)];
// }

// solution(3, [
//   'tank',
//   'kick',
//   'know',
//   'wheel',
//   'land',
//   'dream',
//   'mother',
//   'robot',
//   'tank',
// ]);
