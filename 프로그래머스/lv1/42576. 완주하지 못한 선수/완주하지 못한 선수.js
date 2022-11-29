function solution(participant, completion) {
  // 처음 filter와 includes를 사용하여 차집합을 구해 풀려고 했으나 동명이인이 있는 경우가 있어 사용하지 못함
  // 마라톤에 참여한 선수의 이름이 담긴 배열 participant
  // 완주한 선수들의 이름이 담긴 배열 completion
  // 참여 선수와 완주 선수 정렬 후, 서로의 인덱스가 같지 않으면 해당 인덱스 값을 리턴
  participant.sort();
  completion.sort();
  let idx = 0;
  while (participant[idx] == completion[idx]) {
    idx++;
  }
  return participant[idx];
}

solution(["leo", "leo", "kiki", "eden"], ["leo", "eden", "kiki"]);