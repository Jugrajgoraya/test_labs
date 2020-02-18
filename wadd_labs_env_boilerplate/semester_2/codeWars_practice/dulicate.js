
function duplicateCount(text){
  let temp = 0;
  let str = '';
  let string = text.toLowerCase();
  for(let i = 0; i < string.length; i++){
      for(let char of str){
        if(string[i] === char){
            str += string[i];
            temp += 1;
          }else{
            
          }
      }
   }
   return str.len;
}

console.log(duplicateCount('aabb'));
