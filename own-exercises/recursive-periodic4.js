function periodic(n){
	if (n === 1){
    return 0
  } else if (n === 0){
    return 1
  } else return -(periodic(n-2))
}