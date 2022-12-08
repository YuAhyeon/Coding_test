function solution(id_list, report, k) {
  // 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템 개발
  //! 각 유저는 한번에 1명 유저 신고 ㄱㄴ
  //! 신고 횟수 제한 없음 서로 다른 유저 신고 ㄱㄴ
  //! k번 째 이상 신고 유저 정지 먹음 근데? 얘를 신고한 모든 유저한테 얘 정지했다고 메일 발송함

  //? 한 사람이 같은 사람을 여러번 신고한 경우는 신고 횟수가 1회니까 report의 중복을 제거
  const onlyReport = [...new Set(report)];
  //? id_list 수만큼 새 배열에 0 채우기
  const cnt = Array(id_list.length).fill(0);
  // console.log(cnt);
  // console.log(onlyReport);

  for (let i of onlyReport) {
    // 유저와 유저가 신고한 유저 구분
    i = i.split(" ");

    // 그 중 신고받은 유저만 추출
    let getReport = i[1];
    //   console.log(getReport);

    let getReportIdx = id_list.indexOf(getReport); //! 신고 받은 유저 IDX 찾아서 해당 인덱스 카운트
    cnt[getReportIdx]++; //! 신고 횟수 카운트
  }
  // console.log(id_list);
  // console.log(cnt);

  //! K번 이상이면 게시판 이용 정지
  let unavailable = []; //? 게시판 이용 정지를 당한 유저를 담을 배열 선언
  for (let i = 0; i < cnt.length; i++) {
    if (cnt[i] >= k) unavailable.push(id_list[i]);
  }
  // console.log(cnt);
  // console.log(unavailable);

  //! 정지당한 유저를 신고한 유저에게 메일을 발송
  //? id_list 수만큼 새 배열에 0 채우기
  const mail = Array(id_list.length).fill(0);

  for (let i of onlyReport) {
    i = i.split(" ");
    //! 유저
    let id = i[0];
    //   console.log(id);
    //! 신고한 유저
    let getReport = i[1];
    //   console.log(getReport);
    //! 신고한 유저의 indexOf 했을 때 인덱스가 추출된다면 유저가 신고했다는 것
    if (unavailable.indexOf(getReport) >= 0) {
      //! 유저의 인덱스 가져오기
      let userIdx = id_list.indexOf(id);
      //! 해당 유저에 count
      mail[userIdx]++;
    }
  }
  // console.log(mail);

  return mail;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  [
    "muzi frodo",
    "muzi frodo",
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ],
  2
);
// solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"], 3)
