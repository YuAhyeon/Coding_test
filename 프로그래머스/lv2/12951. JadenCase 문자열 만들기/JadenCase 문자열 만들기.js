function solution(s) {
  // 각 단어의 첫 글자를 제외한 나머지는 모두 소문자이므로 전체를 소문자로 먼저 변환
  s = s.toLowerCase();

  // 공백 기준으로 배열로 변환
  const arr = s.split(' ');

  // substring을 통해 각 부분을 추출해서 첫 글자만 대문자로 변환 후, 나머지와 붙여주기
  return arr.map(word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length)
  }).join(' ');
}

solution("for the last week")