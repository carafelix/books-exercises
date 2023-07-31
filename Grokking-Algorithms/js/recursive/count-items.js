const numArr = [2,8,9,10,20,5,40,50,100,'veet','qmiras','papiche','geometria'];

function countItems(arr){
    if (arr.length === 1){
        return 1
    } else return countItems(arr.slice(1)) + 1
};


console.log(countItems(numArr));
console.log(numArr.length);
