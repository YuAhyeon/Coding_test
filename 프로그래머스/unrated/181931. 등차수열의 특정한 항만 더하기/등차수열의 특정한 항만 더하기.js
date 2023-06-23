function solution(a, d, included) {
  let num = a;

  included = included.map(e => {
    const result = [num, e];
    num += d;
    return result;
  });

  return included.reduce((a, c) => c[1] ? a + c[0] : a, 0);
}