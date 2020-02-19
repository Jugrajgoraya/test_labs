
function duplicateCount(text){
  let temp = 0;
  let arr = [];
  let Arr = text.toLowerCase().split("");
  for(let char of Arr){
    if (arr.includes(char)) {
      temp += 1;
    }
    else{
      arr.push(char)
    }
  }
  return temp;
}

console.log(duplicateCount('aabbc'));
