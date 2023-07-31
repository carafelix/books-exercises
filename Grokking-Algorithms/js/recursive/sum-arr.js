const numArr = [2,8,9,10,20,5,40,50,100];
const god = [1,2,3,4]

function sumArr(arr){
        if(arr.length === 0){
            return 0
        } else return arr[0] + sumArr(arr.splice(1))
}

console.log(sumArr(numArr));
console.log(sumArr(god));
