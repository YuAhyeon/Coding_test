function solution(my_string, target) {
    const rmStrLen = my_string.split(target).join('').length;
    return rmStrLen < my_string.length ? 1 : 0;
}