// minimo común multiplo, least common multiple
// el numero más cercano en que se encuentran dos numeros


const primes = require('./primes.json');


function primeLCM(n1,n2){ // O(log2n)
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
console.log(primeLCM(1982389123,349812334));
console.log(primeLCM(1239,8765));
console.log(primeLCM(82,1237985));
console.log(primeLCM(89472387,5512389128938912391235128938891));
console.log(primeLCM(81783923,1444281928371928373891));
console.log(primeLCM(81783921239012398192833,1444281928371928373891));



function findLCM(n1,n2){ //bruteforce SUPER SLOW
    let lcm = (n1>n2) ? n1 : n2;
    while('sexever'){
        if (lcm % n1 == 0 && lcm % n2 == 0){
            return lcm
        }

        lcm++;
    }
}

