function solution(A, B) {
  if (A === B) return 0;

  const arr = [...A];
  const words = [];

  for (let i =  1; i < B.length; i += 1) {
    const str = arr.pop();
    arr.unshift(str);
    const word = arr.join('');
    words.push(word);
  }

  let result = 0;
  for (let i =  0; i < words.length; i += 1) {
    if(words[i] === B){
      result = i + 1;
      break;
    }

    result = -1;
  }
  
  return result;
}

solution('hello', 'ohell');