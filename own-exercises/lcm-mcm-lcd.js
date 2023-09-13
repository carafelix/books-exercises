// minimo común multiplo, least common multiple
// el numero más cercano en que se encuentran dos numeros

function findLCM(n1,n2){ //bruteforce SUPER SLOW
    let lcm = (n1>n2) ? n1 : n2;
    while('sexever'){
        if (lcm % n1 == 0 && lcm % n2 == 0){
            return lcm
        }

        lcm++;
    }
}
console.log(new Date());

// console.log(findLCM(800,2993))
// console.log(findLCM(81923,1283891))
// console.log(findLCM(83219,23))
// console.log(findLCM(230,10))
// console.log(findLCM(1230,20))

const primes = require('./primes.json');


function primeLCM(n1,n2){
    const L = [];

    while('foreverland'){
        let div;

        for(let i=0;i<primes.length;i++){
            div = primes[i];
            if(n1%div == 0 && n2%div == 0){
                break
            } else div = 1;
        }
        if(div == 1){
            L.push(n1);
            L.push(n2);
            return L.reduce((a,b)=>a*b,1)
        }else{
            n1 /= div;
            n2 /= div;
            L.push(div)
        }
        

    }
    

}
console.log(new Date());

// console.log(primeLCM(800,2993));
console.log(primeLCM(81923,1283891));
console.log(new Date());
