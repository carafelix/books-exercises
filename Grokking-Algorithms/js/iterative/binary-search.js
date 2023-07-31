function makeArray(n){
    let arr = []
    for (i = 1; i<=n; i++){
        arr.push(i);
    }
    return arr
}

let longArray = makeArray(10000);

function binarySearch(arr, t){ // t = target // with numbers but I will later do an array for str.length

    let min = 0;               // this are indexes 
    let max = arr.length-1

    search: while ( min <= max){

        let mid = Math.floor((min+max)/2);
        let guess = arr[mid]

        if (guess === t){
            return mid
            
        } else if (guess > t){
            max = mid - 1
            continue search

        } else if (guess < t){
            min = mid + 1
            continue search
        }
    }
        return guess
}

// crash crash crash warning

function makeArrayStr(n){
    let arr = [];

    for (i = 0; i<=n; i++){
        if (i%2 == 0){
            arr[i] = addStrA(i);
            
        } else if (i%2 !== 0){
            arr[i] = addStrB(i);
        }
    }

        return arr
}

function addStrA(n){
    let str = '';
    for (x = 0; x<=n; n++){
        str += 'a'
    } return str
}
function addStrB(n){
    let str = '';
    for (x = 0; x<=n; n++){
        str += 'b'
    } return str      
}


function binarySearchStr(arr, t){

    let min = 0;
    let max = arr.length-1

    search: while ( min <= max){

        let mid = Math.floor((min+max)/2);
        let guess = arr[mid]

        if (guess === t){
            return mid
            
        } else if (guess > t){
            max = mid - 1
            continue search

        } else if (guess < t){
            min = mid + 1
            continue search
        }
    }
        return guess

}