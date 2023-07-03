function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  let arr = num_list;

  switch (n) {
    case 1:
      arr = arr.slice(0, b + 1);
      break;
    case 2:
      arr = arr.slice(a, arr.length);
      break;
    case 3:
      arr = arr.slice(a, b + 1);
      break;
    case 4:
      arr = arr.slice(a, b + 1).filter((_, idx) => idx % c === 0);
      break;
  }

  return arr;
}

console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
