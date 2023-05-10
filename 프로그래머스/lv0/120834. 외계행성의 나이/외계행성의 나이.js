function solution(age) {
  let result = ''
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  age = String(age)
  for(let i = 0 ; i < age.length ; i++){
    const idx = Number(age[i])
    result += alphabet[idx]
  }
  return result
}

solution(23)