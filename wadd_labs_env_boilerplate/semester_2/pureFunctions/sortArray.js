const words = ['blue', 'apple', 'likes', 'bandaids'];

function sortArray(string){
    let temp = JSON.stringify(string);
    let newWords = JSON.parse(temp);
    return newWords.sort();
}
console.log(words);

console.log(sortArray(words)); // ['apples', 'bandaids', 'blue', 'likes'];