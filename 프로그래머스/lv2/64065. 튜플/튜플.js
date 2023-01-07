function solution(s) {

  /*
  1. 중괄호를 제거해 준다.
  2. 요소의 개수를 객체로 count 해 준다
  3. 요소 : 개수의 형태로 나온 객체의 값을 기준으로 sort 해 준다
  4. map을 통해 0번째에 있는 것은 키이므로 키만 뽑아 number 타입으로 변환한다
  */



  /*
  {{ }} 제거해 주게 되면 안에 있는 중괄호들이 남는데, 안의 중괄호(},{) 기준으로 나누면
  각 집합끼리 묶을 수 있음
  집한 내부에서도 각 요소끼리 나누어주기 위해 ','를 기준으로 나누어 준다
  */
 s = s.slice(2, s.length-2).split('},{');
 console.log(s)
 s = s.map((ele) => ele = ele.split(','))
 console.log(s)


 /*
 각 집합의 요소를 하나씩 돌면서 요소를 키로 갖는지 확인 후 
 ? 없으면 해당 요소를 키로 만들어 주고 (초기키 count는 1)
 ? 있으면 해당 요소의 키에 +1 시켜 주어
 ! 해당 요소들의 개수를 count 한다!
 */

 let result  = {}
  for(let i = 0 ; i < s.length ; i++){
    for(let j = 0 ; j < s[i].length ; j++){
      !result.hasOwnProperty(s[i][j]) ? result[s[i][j]] = 1 : result[s[i][j]] += 1;
    }
  }
  console.log(result)
  /*
  ! 키 => 요소
  ! 값 => 요소의 갯수
  값을 기준으로 sort를 해 주고
  결과는 키값만 가지고 와야 하고 
  타입은 number 타입이므로 map을 통해 첫번째 요소를 number로 형변환해 준 뒤 리턴
  */
  result = Object.entries(result).sort(([, a], [, b]) => b - a)
  console.log(result)

    result = result.map((ele) => ele = Number(ele[0]))
    console.log(result)

    return result;
  }
solution("{{20,111},{111}}")
