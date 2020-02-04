function removeVowels (string){
    
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    return string.split('').filter((el)=> !vowels.includes(el))
    
}
console.log(removeVowels('happy'));
