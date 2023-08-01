const numArr = [111,122,128,149,160,200,250,255,565,669,743,894,959,999]; // length = 14
// index         0   1   2   3   4   5   6   7   8   9   10  11  12  13


function binarySearch(arr,num){
    const guess = Math.ceil(arr.length/2) - 1; //guess index
    console.log(arr.length)
    console.log(arr)
    console.log(arr[guess])

    if (arr.length === 1 && arr[0] === num){

        return guess

    } else if(num>arr[guess]){

            return guess+1 + binarySearch(arr.slice(guess+1), num);

    } else if (num<arr[guess+1]){

            return binarySearch(arr.slice(0, guess+1), num); 
    } else return -1
}

console.log(binarySearch(numArr, 669))