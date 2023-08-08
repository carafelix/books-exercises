function rutCheck( rut ){

  const checkDigit = rut.split('-')[1];
  const dropHyphen = rut.split('-')[0];

  const factorObj = {
    '0': 2,
    '1': 3,
    '2': 4,
    '3': 5,
    '4': 6,
    '5': 7,
  }

  const double = dropHyphen.split('').reverse().map( (n,i) => {
    

    if (i>=6){
      const times = i%6;
      i = times;
    }

    return n * factorObj[i] 

  } );
  
  return double

}


console.log(rutCheck('19893945-5'))

// https://es.wikipedia.org/wiki/C%C3%B3digo_de_control 

// rut es mod 11. Is a deviation from lunh algorithm mod 10. that has a few flaws listed on wikipedia



function luhnCheck( numStr ){  // convetion on check digit after '-'

  // calculates check digit

  const checkDigit = numStr.split('-')[1]
  const dropHyphen = numStr.split('-')[0];

  const double = dropHyphen.split('').reverse().map( (n,i) => {
    if ( i === 0 || i%2 === 0){
      return n = +n * 2
    } else return +n
  } );
  const separate = [];
    for (n of double){                 // 'in' points key/"index", 'of' points values
      if (n<=9){
        separate.push(n)
      } else{
        separate.push(...(`${n}`.split('')))
      }
    }

   // check calculated digit against original number

   if (10 - separate.reduce((acc,n)=>acc + +n)  % 10 === +checkDigit){
    return true
   } else return false

}

// console.log(luhnCheck('7992739871-3'))
 