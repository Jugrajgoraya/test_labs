// function balancedNum(number){
//     let leftSum = 0;
//     let rightSum = 0;
//     let num = number.toString();
//     if(num.length === 2){
//         return "balanced"
//     }if(num.length === 1){
//         return "balanced"
//     }if(num.length % 2 === 0){
//         for (let i =0; i<num.length/2-1; i++){
//             leftSum += parseInt(num[i]);
//         }
//         for (let i =num.length; i>num.length/2+1; i--){
//             rightSum += parseInt(num[i]);
//         }
//     }if(num.length % 2 !== 0){
//         for (let i =0; i<(num.length+1)/2-1; i++){
//             leftSum += parseInt(num[i]);
//         }
//         for (let i =num.length; i>(num.length+1)/2; i--){
//             rightSum += parseInt(num[i]);
//         }
//     }
//     if(leftSum === rightSum){
//         return "balanced"
//     }else if(leftSum !== rightSum){
//         return "not balanced"
//     }
// }


// the parameter "number" coming into this func is the type of number;
function balancedNum(number) {
    const numberString = number.toString();
    const left = getLeftSide(numberString);
    const right = getRightSide(numberString);
    if (sumNumbers(left) === sumNumbers(right)) {
      return 'Balanced'
    } else {
      return 'Not Balanced'
    }
  }
  function getLeftSide(number) {
    let str = null;
    if (number.length % 2 === 0) {
      str = number.slice(0, (number.length / 2) - 1);
    } else {
      str = number.slice(0, number.length / 2)
    }
    return str;
  }
  function getRightSide(number) {
    return number.slice((number.length / 2) + 1)
  }
  function sumNumbers(number) {
    let sum = 0;
    for (let n of number) {
      sum += parseInt(n);
    }
    return sum;
  }
console.log(balancedNum(56239814));

console.log(balancedNum(959));
console.log(balancedNum(432));
console.log(balancedNum(1024));

