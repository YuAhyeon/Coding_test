function solution(players, callings) {
  const playersIdx = {};
  players.forEach((player, idx) => playersIdx[player] = idx);

  callings.forEach((name, idx) => {
    let overtakePlayerIdx = playersIdx[name];
    let beOvertakenPlayer = players[overtakePlayerIdx - 1];

    players[overtakePlayerIdx - 1] = players[overtakePlayerIdx];
    players[overtakePlayerIdx] = beOvertakenPlayer 

    playersIdx[name] -= 1;
    playersIdx[beOvertakenPlayer] += 1;
  })


  return players;
}