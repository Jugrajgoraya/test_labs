let arr = [2,1,7,3,5]

function sort() {
    let temp = 0;
    for(let i=0; i<arr.length; i++){
        for(let j =1; j<=arr.length; j++){
            if(arr[j]<arr[j-1]){
                temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(sort()); 
