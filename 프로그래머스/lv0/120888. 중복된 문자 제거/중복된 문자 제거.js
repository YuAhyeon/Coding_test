function solution(my_string) {
  const alphabet = [];
  let result = ''

  for(let i = 0 ; i < my_string.length ; i++){
    const letter = my_string[i];
    if(alphabet.indexOf(letter) >= 0){
      continue;
    }else {
      alphabet.push(letter);
      result += letter;
    }
  }

  return result;
}

solution("people")