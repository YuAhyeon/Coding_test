function solution(s) {
  s = s.split(' ') 
  let sum = 0;

  for(let i = 0 ; i < s.length ; i++){
    s[i] === 'Z' ?  sum -= parseInt(s[i-1]) :  sum += parseInt(s[i])
  }

  return sum
}

solution("1 2 Z 3")
solution("10 20 30 40")
solution("10 Z 20 Z 1")
solution("10 Z 20 Z")
solution("-1 -2 -3 Z")