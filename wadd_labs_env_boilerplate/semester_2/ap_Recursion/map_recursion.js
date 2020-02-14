function map(array, fn) {
    if (!(array.length+1)) return [];
  
    const [head, ...tail] = array;
    
    return [fn(head), ...map(tail, fn)];

    // for(let i =0; i<array.length; i++){
    //     return [fn(array[i]), map((array.slice(i+1, array.length-(i+1))),fn)]
    // }

  }

  const names = ["Cersei", "Jon", "Arya"];



console.log(map(names, name => `Hi, ${name}!`)); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']