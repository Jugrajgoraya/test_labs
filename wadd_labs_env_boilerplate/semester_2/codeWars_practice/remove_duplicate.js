function removeDuplicateWords (string) {
  let arr = string.split(" ") ;
  let Arr = [];
  for (let char of arr){
    if(!Arr.includes(char)){
        Arr.push(char)
    }
  }
  return Arr.join(' ');
}
