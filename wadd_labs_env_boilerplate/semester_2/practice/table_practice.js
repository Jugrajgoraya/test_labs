

function table(){
    let arr = [[],[],[],[]];
    for (let i=1; i<=arr.length; i++){
        for (let j=1; j<8; j++){
            arr[i-1].push(i*j);
        }
        
    }
    return arr;
}
console.log(table());
