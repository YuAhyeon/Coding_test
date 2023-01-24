
 //? 집합 원소 만드는 함수
function makeSet (s){
  const set = [];
  while(s.length){
    if(s.length === 1) break;  // 두글자씩 끊어서 하기 때문에 남은 글자가 한 글자라면 멈추기 
    const str = s.slice(0, 2);  // 집합 원소
    if(!str.replace(/[A-Z]/g, '').length) set.push(str) // 원소가 [A-Z]라면 공백으로 바꿈 => 길이가 없을 경우 집합에 push
    s = s.slice(1); // 한글자씩 밀기
  }
  return set;
}

function solution(str1, str2) {
  /*
  ! 교집합 크기 / 합집합 =자카드 
  ! 공집합 => 1

  1. 각 집합 만들어 주기 => makeSet() 호출
  2. 교집합 구하기 => forEach 돌려서 다른 집합에 indexOf를 통해 해당 요소 0으로 만들어 주고 count
  3. 합집합 구하기 => (set1 길이 + set2 길이) - 교집합 수
  4. 나눠버리기~!
  */

  const set1 = makeSet(str1.toUpperCase());
  const set2 = makeSet(str2.toUpperCase());

  /* 
  console.log(set1);
  console.log(set2);
  */

  //! 공집합일 경우
  if(!set1.length && !set2.length) return 65536


  //? 교집합 구하기
  let intersection = 0;
  set1.forEach( (e) => {          // set1의 요소를 순회하면서
    if(set2.indexOf(e) !== -1){   // set1의 요소를 set2가 가지고 있다면
      set2[set2.indexOf(e)] = 0   // set2의 해당 위치를 0으로 바꿔주기 (중복 때문에)
      intersection++;             // 교집합 원소의 수 count
    } 
  });

  //? 합집합 => 전체 원소의 수 - 교집합 수
  const union = (set1.length + set2.length) - intersection

  /* 
  ! 교집합 / 합집합 = 자카드
  ! return 자카드 * 65536 => floor 소수점 버리기
  */

  const jaccard = intersection / union
  // console.log(Math.floor(jaccard * 65536));
  return Math.floor(jaccard * 65536)

}

// solution('FRANCE',	'french') // expect output => 16384
// solution('handshake',	'shake hands') // expect output => 65536
// solution('aa1+aa2',	'AAAA12') // expect output => 43690
// solution('E=M*C^2',	'e=m*c^2') // expect output => 65536
// solution('aaaaa',	'aaaab') // expect output => 39321
// solution('aaaaa',	'') // expect output => 0
// solution('aaaaa',	'aaabc') // expect output => 21845
// solution('A+C',	'DEF') // expect output => 0