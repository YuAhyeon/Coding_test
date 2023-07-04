function solution(num_list, n) {
    const arr1 = num_list.slice(n);
    const arr2 = num_list.slice(0, n);
    return [...arr1, ...arr2];
}