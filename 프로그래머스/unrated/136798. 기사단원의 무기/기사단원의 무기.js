function solution(number, limit, power) {
    //? 1. 각 number의 약수의 개수를 먼저 구함
    //? 2. 약수의 개수가 limit를 초과할 경우 power로 대체
    //? 3. 모두 더해서 return
  
    let knight = [];
    let divisorCount = 0;
    //? 1번부터 number번까지의 기사 무기 쇼핑 시작
    for (let i = 1; i <= number; i++) {
      divisorCount = 1;
      //? 기사들은 자신의 번호까지 약수 개수만큼의 공격력을 구매할 수 있다!
      //! 시간 초과로 약수 절반까지만 구하고 +1 해주는 방식 사용      
      for (let d = 1; d <= i/2; d++) {
        if (i % d === 0) divisorCount++;
      }
  
      //! 근데 divisorCount가 limit보다 크면 power로 대체
      divisorCount > limit ? (divisorCount = power) : divisorCount;
      knight.push(divisorCount);
      console.log(divisorCount);
    }
    console.log(knight);
    //? 공격력 1당 1kg로 철 필요, 모든 공격력 더해버리기
    knight = knight.reduce((a, b) => a + b);
    console.log(knight);
  
    return knight;
  }
  
  solution(10, 3, 2);
  