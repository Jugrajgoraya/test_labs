function findDivisor (Integer){
    let arr =[]
    for (let i=1; i<=Integer; i++){
        if(Integer%i===0){
            arr.push(i);
        }
    }
    return arr.length;
}
console.log(findDivisor(12));