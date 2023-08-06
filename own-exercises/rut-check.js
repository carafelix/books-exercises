function rutCheck( rut ){

  const numToCheck = rut.split('-')[0];

  

}


rutCheck('19893945-5')

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

console.log(luhnCheck('7992739871-3'))
 