function solution(money) {
  const americano = 5500;
  const result = [];

  result.push(Math.floor(money / americano));
  result.push(money % americano)

  return result
}

// solution(5500)
solution(15000)
