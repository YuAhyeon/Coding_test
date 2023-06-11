function solution(quiz) {
  const ox = [];
  quiz.forEach( ele => {
    const question = ele.split(" ")
    const [X, operator, Y, _, R] = question;
    const numX = Number(X);
    const numY = Number(Y);
    const result = Number(R);
    
    switch (operator){
      case "+":
        numX + numY === result ? ox.push("O") : ox.push("X")
        break;
        
      case "-":
        numX - numY === result ? ox.push("O") : ox.push("X")
        break;
    }
  });

  return ox;
}

solution(	["-3 - 3 = -6"])
// solution(	["3 - 3 = 0"])