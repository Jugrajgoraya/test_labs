function digital_root(n) { 
    let sumOne = 0;
    let sumTwo = 0;
    for(let char of n.toString()){
        sumOne += parseInt(char);
    }
    if(sumOne.toString().length >= 2){
        for(let char of sumOne.toString()){
            sumTwo += parseInt(char);
        } 
        return sumTwo;
    }
    return sumOne;
  }
  console.log(digital_root(534));