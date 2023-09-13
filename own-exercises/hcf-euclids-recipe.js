// Máximo común divisor. GCD = greatest common divisor. HCF = higest common factor 
// el numero más grande q los divide a los dos.
// the recipe the recipe 

export function findHCF(n1,n2){
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

console.log('this gets log by the import?, good to know')