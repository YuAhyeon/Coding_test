function solution(a, b, c, d) {
  const set = [...new Set([a, b, c, d])];
  // 네 주사위에서 나온 숫자가 모두 p로 같은 경우
  if (set.length === 1) return 1111 * a;
  // 네 주사위에 적힌 숫자가 모두 다른 경우
  else if (set.length === 4) return Math.min(a, b, c, d);
  // 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 경우
  else if (a == b && b == c) return Math.pow(10 * a + d, 2);
  else if (a == d && d == c) return Math.pow(10 * a + b, 2);
  else if (b == d && d == c) return Math.pow(10 * d + a, 2);
  else if (a == d && d == b) return Math.pow(10 * a + c, 2);
  // 주사위가 두 개씩 같은 값
  else if (set.length === 2) {
    const [p, q] = set;
    return (p + q) * Math.abs(p - q);
  }
  // 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 다른 경우
  else if (set.length === 3) {
    let num;
    set.forEach((e) => {
      const arr = [a, b, c, d];
      if (arr.indexOf(e) !== arr.lastIndexOf(e)) num = e;
    });
    const [p, q] = set.filter((e) => e !== num);
    return p * q;
  }
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
