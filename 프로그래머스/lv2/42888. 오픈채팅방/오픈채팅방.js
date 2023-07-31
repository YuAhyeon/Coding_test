function solution(record) {
  const user = {};
  const answer = [];

  record.forEach(e => {
    const [action, id, nickName] = e.split(' ');
    if(action === 'Enter') user[id] = nickName; 
    if(action === 'Change') user[id] = nickName; 
  })
  
  record.forEach(e => {
    const [action, id, _] = e.split(' ');
    switch (action){
      case 'Enter':
        answer.push(`${user[id]}님이 들어왔습니다.`);
        break;
        case 'Leave':
        answer.push(`${user[id]}님이 나갔습니다.`);
        break;
    }
  })

  return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))