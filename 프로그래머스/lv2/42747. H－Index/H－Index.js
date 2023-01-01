function solution(citations) {
  /*
  H-지수 => 특정 연구원의 연구 성과를 평가하기 위한 지표, 발표 논문수와 피인용수를 사용해 학문적 역량 측정
 H-지수 구하기 => 전체 논문 중 많이 인용된 순으로 정렬 후, 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자!

 참고: https://www.ibric.org/myboard/read.php?Board=news&id=270333
  */

 /* 내림차순 정렬 후, 인용 횟수 h가 h편이 될 때 바로 리턴 */

 citations.sort((a, b) => b - a);

 for(let h = 0 ; h < citations.length ; h++){
  //피인용수가 논문수보다 작아지기 시작할 때 리턴
  if(citations[h] <= h){
    return h;
  }
 }

 return citations.length;
}

solution([3, 0, 6, 1, 5])
/*
 ? 많이 인용된 순으로 정렬 후, 
 ? 인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자

피인용수          논문수      boolean
6                 1          false
5                 2          false
3                 3          true   (당첨!!)
1                 4
0                 5


*/