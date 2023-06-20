function solution(keymap, targets) {
  targets = targets.join('0');
  let pressKeySum = 0;
  let pressKey = Infinity;

  const result = [];
  for (let i = 0; i < targets.length; i += 1) {
    // 0일 때, 한 타겟이 끝났다는 의미이므로 push(), presskey 초기화
    if (targets[i] === '0') {
      result.push(pressKeySum);
      pressKeySum = 0;
      continue;
    }
    
    keymap.forEach((key) => {
      const idx = key.indexOf(targets[i]) + 1;
      if (pressKey > idx && idx !== 0) pressKey = idx;
    });
    
    pressKeySum += pressKey;
    pressKey = Infinity;
  }

  result.push(pressKeySum);
  return result.map(e => e === Infinity ? -1 : e)
}

solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']);