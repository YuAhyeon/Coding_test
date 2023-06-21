function solution(str, skip, index) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const regex = new RegExp(`[${skip}]`, 'g');
  const filteredAlphabet = alphabet.replace(regex, '');

  const result = [];
  for(let i = 0 ; i < str.length ; i += 1){
    let start = filteredAlphabet.indexOf(str[i]) + index

    if(start >= filteredAlphabet.length){
      start = start % filteredAlphabet.length;
    }

    const char = filteredAlphabet.slice(start, start + 1);
    result.push(char)
  }

  return result.join('')
}

solution("aukks", "wbqd", 5)