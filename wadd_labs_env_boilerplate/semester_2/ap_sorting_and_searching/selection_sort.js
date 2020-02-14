function selectionSort (arr){
    let sortedArr = [];
    let remainedArr = [...arr];
    let len = arr.length
    let minimum = 0;
    let index = 0;
    for (let i =0 ; i<len; i++){
        minimum = remainedArr[0]
        for ( j = 0; j<=remainedArr.length-1; j++){

            if(minimum > remainedArr[j]){
                minimum = remainedArr[j]
                index = j;
            }else{

            }
        }
        sortedArr.push(minimum);
        remainedArr.splice(index, 1)
    }
    return sortedArr;
}

console.log(selectionSort([9, 5, 1, 2, 0, 3]));
// function selectionSort (array) {
//     let n = array.length;
//     for (let i = 0; i < n -1 ; i++) {
//         let minIndex = i;
//         for (let j = i+ 1; j<n;j++){
//             if (array[j] < array[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         let temp = array[minIndex];
//         array[minIndex] = array[i]
//         array[i] = temp;
//     }
//     return array;
// }
// console.log(selectionSort([5,9,39,2,4,6,3,88]));