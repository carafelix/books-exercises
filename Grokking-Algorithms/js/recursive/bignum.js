const numArr = [2,8,9,10,200,400,20,5,40,50,100,99,300];

function findHighest(arr){
    let copy = arr.slice(0);
    if (arr[0]>arr[1]){
        copy.splice(1,1);
        return findHighest(copy)
    } else if (arr[1]>arr[0]){
        copy.splice(0,1);
        return findHighest(copy)
    } else return arr[0] //base

}

console.log(findHighest(numArr))