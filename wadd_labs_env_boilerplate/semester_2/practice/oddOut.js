function oddOneOut(str) {
    const arr = str.split("");
    const newarr = [];
    let temp = 0;
    for (let i = 0 ; i< arr.length; i++){
        
        if(!newarr.includes(arr[i])){
            newarr.push(arr[i])
        }
        
    }
 }
 console.log(oddOneOut("juugraj"))