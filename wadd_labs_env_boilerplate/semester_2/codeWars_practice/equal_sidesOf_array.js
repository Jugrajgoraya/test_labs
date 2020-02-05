function findEvenIndex(arr){
    let num1 = 0;
    let num2 = 0; 
    let num3 = 0;
    for(let k = 1; k<arr.length; k++){
        num3 += arr[i];
    }
    if(num3 === 0){
        return 0;
    }
  for(let i = 0; i< arr.length; i++){
      num1 += parseInt(arr[i]);
      num2 = 0;
      for(let j = arr.length -1 ; j>i+1; j--){
        num2 += parseInt(arr[j]);
      }
      if(num1 === num2){
          return i+1;
      }   
  }
  return -1;
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
