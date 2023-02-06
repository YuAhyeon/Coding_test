function solution(numer1, denom1, numer2, denom2) {
    let denom = (denom1 * denom2);
    let numer = (denom1 * numer2) + (denom2 * numer1);
    
    let num = 0
    
    for(let i=1;i<=denom;i++){
        if( !(numer%i) && !(denom%i)) num = i
    }

    return [numer/num , denom/num];
}


solution(1,2,3,4)