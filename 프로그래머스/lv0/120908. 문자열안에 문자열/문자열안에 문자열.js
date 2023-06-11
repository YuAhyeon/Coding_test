function solution(str1, str2) {
  const pattern = new RegExp(str2, 'g');
  return str1.match(pattern) ? 1 : 2
}

solution("abE443fgh22iJKlmn1o", "6CD")