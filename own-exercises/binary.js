// not my code, just saving

function dec2bin(dec) {
    return (dec >>> 0).toString(2).padStart(11,'0');
  }
  
  const a = 2000;
  console.log(dec2bin(a))
  const b = 255; 
  console.log(dec2bin(b))
  
  
  console.log(a & b); 

  function mod256WithoutMod(number)
{
  if(number < 0)
  {
    return -mod256WithoutMod(-number);
  }
  return number & 255;
}