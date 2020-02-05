function latinpig(string) {
    const Vowels = ["a", "e", "i", "o", "u"];
    let index = 0;
    if (Vowels.includes(string[0])) {
      return string + "ay";
    } else {
      for (let char of string) {
        if (Vowels.includes(char)) {
          index = string.indexOf(char);
        }
      }
      return string.slice(index) + string.slice(0,index) + "ay";
    }
  }
  console.log(latinpig("pig"));
  console.log(latinpig("latin"));
  console.log(latinpig("banana"));
  console.log(latinpig("trash"));
  console.log(latinpig("happy"));
  console.log(latinpig("duck"));
  console.log(latinpig("too"));
  console.log(latinpig("eat"));
  console.log(latinpig("omelet"));