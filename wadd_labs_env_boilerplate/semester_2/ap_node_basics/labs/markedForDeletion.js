const fs = require('fs');

fs.readFile('./marked.csv', {encoding: 'utf8'}, (a, data) => {
    let array ;
    let arr =[];
    let finalArray = [];
    if (a) {
      console.log(a);
      throw new Error('something bad happened')
    }
    array = data.split('\n');
    for (let i = 0; i<array.length; i++){
        array[i] += (',\n')
        arr.push(array[i].split(','))
        if(!arr[i].includes('yes')){
            finalArray.push(arr[i]);
        }
    }
    fs.writeFile('./delete.csv', finalArray, {encoding: 'utf8'}, (err) => {
        if(err) {
          console.log(err);
          throw new Error('Unable to write file, err:' + err);
        }
        console.log('done')
      })
  })


