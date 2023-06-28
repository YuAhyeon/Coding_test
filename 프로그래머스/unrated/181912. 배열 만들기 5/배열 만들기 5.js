function solution(intStrs, k, s, l) {
  const result = [];
  intStrs.forEach((intStr) => {
    const num = Number(intStr.slice(s, s + l ));
    if (k < num) result.push(num);
  });
  return result;
}

console.log(
  solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5)
);
