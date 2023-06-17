function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2
}

solution(7, 20)
solution(11, 22)
solution(12, 21)