function solution(cipher, code) {
  return [...cipher].filter((e, i) => (i + 1) % code === 0).join("")
}

solution("dfjardstddetckdaccccdegk", 4)
solution("pfqallllabwaoclk", 2)