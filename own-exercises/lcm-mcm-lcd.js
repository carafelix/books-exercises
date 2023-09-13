// minimo común multiplo, least common multiple
// el numero más cercano en que se encuentran dos numeros


const primes = require('./primesBIG.json');


function primeLCM(n1,n2){ // prime bruteforce, doesn't work for too large too small combinatios
    const L = [];
    let i = 0;
    
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
                    } else if (n1 == 1 && n2 == 1){
                        return L.reduce((a,b)=>a*b,1)
                    } else i++;
                
        }
    }

console.log(primeLCM(800,41));
console.log(primeLCM(3804,23800));
// console.log(primeLCM(1982389123,349812334));
console.log(primeLCM(38042,23800));
console.log(primeLCM(82,1237985));



function findLCM(n1,n2){ //bruteforce SUPER SLOW
    let lcm = (n1>n2) ? n1 : n2;
    while('sexever'){
        if (lcm % n1 == 0 && lcm % n2 == 0){
            return lcm
        }

        lcm++;
    }
}

