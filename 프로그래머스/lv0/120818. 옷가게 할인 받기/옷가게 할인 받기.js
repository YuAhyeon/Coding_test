function solution(price) {
  if(price >= 500000){
    price *= 0.8;
  }else if(price >= 300000){
    price *= 0.9;
  }else if(price >= 100000){
    price *= 0.95;
  }
  console.log(price)
  // console.log(Math.floor(price))
  return Math.floor(price)
}