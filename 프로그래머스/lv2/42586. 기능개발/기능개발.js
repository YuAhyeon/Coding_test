function solution(progresses, speeds) {

 /*
 
 [93, 30, 55]	[1, 30, 5]	
 
 93    30    55
 94    60    60
 95    90    65
 96    100   70
 97          75
 98          80
 99          85
 100         90         
             95
             100
 
 앞에 기능이 배포가 됐는지
 배포 O => 나올 수 있음
 배포 X => 앞에 기능 나올 때 같이 나와야 됨

 전체 진도가 고정으로 100이니까 현재 진도를 뺀 나머지에
 작업 속도를 나누면 일수??
 
 */


  //? (완료 작업 진도 - 현재 작업 진도) / 작업 속도 = 작업 일수

  const workingDays = progresses.map((ele, idx) =>{
   return Math.ceil( (100 - ele) / speeds[idx])
  })

  console.log(workingDays)

  /* 
  ? 각 배포마다 몇 개의 기능이 배포되는지!!!!!

  기준 일수 뒤에 오는 넘이 현재 기준보다 작거나 같으면 동시 배포임
  ! 뒤에 오는 게 기준 일수와 같거나 작으면 해당 인덱스에 카운트 계속 해줌
  ! 그렇지 않으면 새로운 배포를 위해 기준 바뀌어야 함
  ? rssult의 인덱스를  전위 증감을 통해 새로운 배포 시즌에 기본값 1을 넣어줌

  */
  const result  = [0];
  let criteria = workingDays[0];
  for(let i = 0 , j = 0; i < workingDays.length ; i++){
    if(workingDays[i] <= criteria){
      result[j] += 1;
    }else{
      criteria = workingDays[i];
      result[++j] = 1;
    }
  }

  console.log(result)

  return result;
}
solution([93, 30, 55], [1, 30, 5])

