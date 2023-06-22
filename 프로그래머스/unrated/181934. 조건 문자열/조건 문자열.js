function solution(ineq, eq, n, m) {
  const str = ineq + eq;
  if(str === '>=') return n >= m ? 1 : 0
  if(str === '<=') return n <= m ? 1 : 0
  if(str === '>!') return n > m ? 1 : 0
  if(str === '<!') return n < m ? 1 : 0
}

solution("<", "=", 20, 50)
solution(">", "!", 41, 78)
