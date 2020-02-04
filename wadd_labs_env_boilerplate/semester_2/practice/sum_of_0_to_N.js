function Sum(n) {
    let sum = 0;
    let ans = "";

    if(n<0){
        return `${n}<0`
    }
    if(n===0){
        return `${n}=0`
    }
    for (let i=0; i<n; i++){
        sum = sum+i;
        ans += i + "+"
    } 
    return ans +`${n}`+"="+`${sum+n}`;
}
console.log(Sum(10));


