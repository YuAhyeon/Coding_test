function solution(chicken) {
  let coupon = Math.floor(chicken / 10) + Math.floor(chicken % 10)
  let service = Math.floor(chicken / 10);

  while(coupon >= 10){
    service += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + Math.floor(coupon % 10)
  }

  return service
}


solution(100)