
const middleBox1 = [];
const middleBox2 = [];
const middleBox3 = ['empty','key'];
const middleBox4 = [middleBox1,middleBox3];


const mainBox = [middleBox2,middleBox4];


function searchKey(arr){
    for (item in arr){  // item == index, arr == arr, arr[item] == value
        if(arr[item] === 'key'){
            return console.log(`found ${arr[item]} in ${item} of ${arr} `)
        } else if (arr[item] !== 'key' && typeof arr[item] !== 'object'){
            continue
        } else if (typeof arr[item] === 'object'){
            searchKey(arr[item])
        } else{
            return
        }
    }
}
 
searchKey(mainBox);