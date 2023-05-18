function solution(rsp) {
  const win = {
    2: 0,
    0: 5,
    5: 2
  }
  return rsp.split("").map((ele) => win[ele]).join('')
}

solution("2")
solution("205")