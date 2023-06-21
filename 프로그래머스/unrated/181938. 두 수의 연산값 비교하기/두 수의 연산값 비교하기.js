function solution(a, b) {
  const A = Number(String(a) + String(b));
  const B = 2 * a * b;
  return A >= B ? A : B
}

solution(2, 91)