// function grabscrab(anagram, dictionary) {
//     let tempString = "";
//     let array = [];
//     for(let i = 0; i < dictionary.length; i++){
//         for (j = 0; j<anagram.length; j++){
//             if(dictionary[i].includes(anagram[j]) && dictionary[i].length === anagram.length  ){
//                 tempString += dictionary[i][j]

//             }
            
//         }
//         if(tempString === dictionary[i]){
//             array.push(dictionary[i]);
//             tempString = "";
//         }
//     }
//     return array;
//   }

function grabscrab(anagram, dictionary) {
    let toFind = anagram.split('').sort().join();
    let arr = [];
    for (let i of dictionary) {
      if (i.split('').sort().join()===toFind) {
        arr.push(i)
      }
    }
    return arr;
}


console.log(grabscrab("oob", ["bob", "baobab"]));
console.log(grabscrab("bbbbb",["b"]));

console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] ));