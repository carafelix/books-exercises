const farm = [1680, 640] // length, width

function euclidesHCF(high, low){   // HCF === Highest Common Denominator 
    let rem = high % low;

    if (rem === 0){
        return low

    } else return euclidesHCF(low , rem);
}

console.log(euclidesHCF(farm[0],farm[1]));


// https://www.khanacademy.org/math/in-in-grade-10-ncert/x573d8ce20721c073:real-numbers/x573d8ce20721c073:euclid-s-division-algorithm/v/intro-to-euclids-division-algorithm-real-numbers