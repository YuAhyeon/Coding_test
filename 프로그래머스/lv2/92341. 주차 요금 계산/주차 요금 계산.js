function solution(fees, records) {
  const [baseTime, baseRate, unitTime, unitRate] = fees;
  const parked = new Map();
  const rate = new Map();

  for (let record of records) {
    let [time, carNum, status] = record.split(' ');
    let [h, m] = time.split(':');
    time = 60 * +h + +m;

    switch (status) {
      case 'IN':
        parked.set(carNum, time);
        break;
      case 'OUT':
        rate.set(carNum, (rate.get(carNum) || 0) + (time - parked.get(carNum)));
        parked.delete(carNum);
        break;
    }
  }

  parked.forEach((time, carNum) => {
    rate.set(carNum, (rate.get(carNum) || 0) + (1439 - time));
  });

  const answer = [...rate]
    .sort((a, b) => a[0] - b[0])
    .map((car) => {
      const time = car[1];
      return time < baseTime
        ? baseRate
        : baseRate + Math.ceil((time - baseTime) / unitTime) * unitRate;
    });

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ]
  )
);
console.log(
  solution(
    [120, 0, 60, 591],
    [
      '16:00 3961 IN',
      '16:00 0202 IN',
      '18:00 3961 OUT',
      '18:00 0202 OUT',
      '23:58 3961 IN',
    ]
  )
);
console.log(solution([1, 461, 1, 10], ['00:00 1234 IN']));
