function solution(slice, n) {
  let cnt = 1;
  while(n > 0){
    if(n - slice <= 0) {
      console.log(cnt);
      return cnt;
    }
    cnt += 1;
    n -= slice;
  }
}