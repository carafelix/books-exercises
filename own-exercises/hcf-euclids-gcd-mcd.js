// Máximo común divisor. GCD = greatest common divisor. HCF = higest common factor 
// el numero más grande q los divide a los dos.

function findHCF(n1,n2){
    let h = (n1>n2) ? n1 : n2;
    let l = (n1<n2) ? n1 : n2;
    let remainder;
    do{
        remainder = h%l;
        if(remainder === 0){
            return l
        } else {
            h = l;
            l = remainder;
        }
    }
    while(remainder)
}

console.log(findHCF(1092312,92933));
console.log(findHCF(32,12));
console.log(findHCF(36,12));