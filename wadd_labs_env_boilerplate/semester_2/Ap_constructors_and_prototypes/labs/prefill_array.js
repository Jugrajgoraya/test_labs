function prefill(n,v){
    let array =[];
    if(parseInt(n)===0){
        return array;
    }
    if(parseInt(n) < 0 || !Number.isInteger(Number(n)) || n === Boolean || !isFinite(n)){
        // return  `${n} is invalid`;
        throw new Error (`${n} is invalid`)
    }

    for (let i = 0; i<parseInt(n); i++){
    
        array.push(v)    
        
    }
    return array;
}
console.log(prefill(5));
