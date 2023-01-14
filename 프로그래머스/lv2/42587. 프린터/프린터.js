function solution(priorities, location) {
 /*
  [{우선순위: 중요도, 처음 인덱스: 인덱스}, {우선순위: 중요도, 처음 인덱스: 인덱스}, {...}, ...]
  map을 통해서 해당 배열을 만들어 줌
 */

 const priorityIdx = priorities.map((e, idx) => {
  return {
    priority: e, idx: idx
  };
 });

 console.log(priorityIdx)

 /*
 맨앞의 요소를 꺼내어 기준으로 삼아
 some 메서드를 사용하여 기준의 우선순위보다 순회하는 요소들 중 
 우선순위가 더 높은 게 있으면 => true => 지금 기준이 되는 문서(criteria)를 맨뒤로 보내고
 우선순위가 더 높은 게 없다면 => false => 바로 출력이므로 queue에 담아 줌
 */

 const queue = [];
 while(priorityIdx.length > 0){
  const criteria = priorityIdx.shift();
  const boolean = priorityIdx.some( e => e.priority > criteria.priority);
  // 더 큰 게 있으면 뒤로 보내 줘야 됨
  // 그렇지 않으면  출력
  boolean ? priorityIdx.push(criteria) : queue.push(criteria);
 }

 /* queue에는 중요순대로 출력된 문서들이 담겨 있고 해당 문서들은 
 각각 'idx'라는 property로 초기 인덱스를 가지고 있으므로 
 .idx를 통해 접근하여 location과 idx의 값이 같은 문서의 현재 인덱스에 +1
 */
  let result = queue.findIndex( e => e.idx === location)+1;
  console.log(result)
  return result
}

solution([1, 1, 9, 1, 1, 1], 0)
