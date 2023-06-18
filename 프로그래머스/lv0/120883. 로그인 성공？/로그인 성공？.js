function solution(id_pw, db) {
  const [inputId, inputPw] = id_pw;
  let wrong = 0;

  for (const [id, pw] of db) {
    if (id === inputId && pw === inputPw) {
      return "login";
    }

    if (id === inputId && pw !== inputPw) {
      wrong = 1;
    }
  }

  return wrong ? "wrong pw" : "fail";
}

solution(
  ["meosseugi", "1234"],
  [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]
);