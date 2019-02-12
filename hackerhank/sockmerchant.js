let n = 5
//let ar = [1,2,1,2,1,3,4]
let ar = [1,1,1,1,1]

function sockMerchant(n, ar) {
   let arPair = 0;
    ar.sort();
    for(let i = 1; i <= n; i++) {
        let isSockEqualToBefore =  ar[i] == ar[i-1];
        if(isSockEqualToBefore) {
            arPair++;
            i++;
        }
    }
    return arPair;
}

sockMerchant(n,ar)
