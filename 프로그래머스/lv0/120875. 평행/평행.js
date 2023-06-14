function solution(dots) {
  let result = 0;

  function calculation(a, b, c, d){
    let abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    let cdDiff = (d[1] - c[1]) / (d[0] - c[0]);
  
    if(abDiff === cdDiff) return result += 1;
  }

  calculation(dots[0], dots[1], dots[2], dots[3]);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return result > 0 ? 1 : 0;
}


solution([[1, 4], [9, 2], [3, 8], [11, 6]])
solution([[3, 5], [4, 1], [2, 4], [5, 10]])