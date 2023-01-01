function solution(cacheSize, cities) {
 /* 
  LRU(제일 오래 사용하지 않은 페이지 교체)
  Set 객체 사용해서 풀어보자!!
  1. has해서 넣을 데이터가 있는지부터 먼저 확인
  2. 있는 경우 지금 넣을 데이터 삭제, cHit니까 +1
     없는 경우 캐시 꽉 참 => 캐시 첫번째 값을 저장 후, 첫번째 값 삭제, cMiss니까 +5
              캐시 안 참 => cMiss니까 +5
  3. 지금 넣을 데이터 add 해 주기

 */

let runtime = 0;
const cache = new Set();
const cHit = 1;
const cMiss = 5;

 if (cacheSize === 0) return cities.length * cMiss;
 cities = cities.map((ele) => ele.toUpperCase());

for(let i = 0 ; i < cities.length ; i++){
  const boolean = cache.has(cities[i])

  if( boolean ){
    cache.delete(cities[i]);
    runtime += cHit
  }else if(cache.size === cacheSize){
    const first = [...cache][0];
    cache.delete(first);
    runtime += cMiss;
  }else{
    runtime += cMiss;
  }
  cache.add(cities[i]);
}
  return runtime
}

solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])

/*
cache hit => 1
cache miss => 5

inoutput ex) (3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])
! miss        miss      miss        miss        miss        miss          miss
1 "Jeju"     "Jeju"     "Jeju"      "Pangyo"    "Seoul"     "NewYork"    "LA"
2            "Pangyo"   "Pangyo"    "Seoul"     "NewYork"   "LA"         "Jeju"
3                       "Seoul"     "NewYork"   "LA"        "Jeju"       "Pangyo"

! miss        miss
1 "Jeju"      "Pangyo"
2 "Pangyo"    "Seoul"
3 "Seoul"     "NewYork"

=> 10 * 5 = 50

inoutput ex) (3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])
! miss    miss      miss    hit       hit       hit       hit       hit       hit
1 Jeju    Jeju      Jeju    Pangyo    Seoul     Jeju      Pangyo    Seoul     Jeju
2         Pangyo    Pangyo  Seoul     Jeju      Pangyo    Seoul     Jeju      Pangyo
3                   Seoul   Jeju      Pangyo    Seoul     Jeju      Pangyo    Seoul

=> 15 + 6 = 21

*/