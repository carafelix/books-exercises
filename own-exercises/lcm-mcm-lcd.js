// minimo común multiplo, least common multiple
// el numero más cercano en que se encuentran dos numeros
// const primes = require('./primesBIG.json');


import  primes   from './primesBIG.json' assert {type: 'json'}; 
import { findHCF } from "./hcf-euclids-recipe.js"; // experimental


function findLCMviaHCF(n1,n2){ // most optimal way. 
    const hcf = findHCF(n1,n2);
    return (n1*n2)/hcf
}

// console.log('\n',findLCMviaHCF(3804,23800));
console.log(findLCMviaHCF(1982389123,349812334));
// console.log(findLCMviaHCF(2.2492340e-30,349812334));

// dumb method below

function primeLCM(n1,n2){ // prime bruteforce, doesn't work for too large nums. SLOW
    const L = [];
    let i = 0;
    let div;
        select: while(Infinity){
                    div = primes[`${i}`];

                    if(n1%div == 0 && n2%div == 0){
                        i = 0;
                        n1 /= div;
                        n2 /= div;
                        L.push(div)
                        continue select
                    } else if ( n1%div == 0 && n2%div !== 0 ){
                        i = 0;
                        n1 /= div;
                        L.push(div)
                        continue select
                    } else if ( n1%div !== 0 && n2%div == 0 ){
                        i = 0;
                        n2 /= div;
                        L.push(div);
                        continue select
                    } else if (n1 == 1 && n2 == 1 || div == 1){
                        console.log(n1,n2,div)
                        return L.reduce((a,b)=>a*b,1)
                    } else i++;
                
        }
    }

console.log(primeLCM(800,41));
// console.log(primeLCM(3804,23800));
// console.log(primeLCM(1982389123,349812334));
// console.log(primeLCM(38042,23800));





function dumbFindLCM(n1,n2){ //bruteforce but 1 by 1 SUPER SLOW rocks
    let lcm = (n1>n2) ? n1 : n2;
    while('sexever'){
        if (lcm % n1 == 0 && lcm % n2 == 0){
            return lcm
        }
        lcm++;
    }
}


