function solution(n) {
  let cnt = 1;
  let pizza = 6;
  while(pizza > 0){
    if(pizza % n === 0){
      console.log(cnt);
      return cnt
    }
    pizza += 6
    cnt += 1
  }
}