function solution(array) {
  const str = array.join("");
  let seven = 0;

  for(let i = 0 ; i < str.length ; i++){
    if(str[i] === '7') seven++;
  }

  return seven;
}

solution([7, 77, 17])