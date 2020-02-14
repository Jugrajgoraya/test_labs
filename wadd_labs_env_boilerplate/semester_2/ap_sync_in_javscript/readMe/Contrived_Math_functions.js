
function add(val1, val2) {
    return new Promise((res, rej) => {
        if(typeof val1 !== 'number'|| typeof val2 !== 'number'){
            rej('not a number');
        }
        const sum = val1 + val2
        setTimeout(() => {
            res(sum);
        }); 
    })
  }
 
  add(2, 3)
  .then(sum => {
      console.log(sum);
  })

  function mult(val1, val2) {
    return new Promise((res, rej) => {
        if(typeof(val1) !== 'number' || typeof(val2) !== 'number'){
            rej('not a number');
        }
        setTimeout(() => {
            res(val1 * val2);
        });
        
    })
  }
  mult(2, 4)
  .then(mult => {
      console.log(mult);
  })

  function div(val1, val2) {
    return new Promise((res, rej) => {
        if(typeof(val1) !== 'number' || typeof(val2) !== 'number'){
            rej('not a number');
        }
        setTimeout(() => {
            res(val1 % val2);
        });
        
    })
  }
  div(4, 2)
  .then(div => {
      console.log(div);
  })

  function sub(val1, val2) {
    return new Promise((res, rej) => {
        if(typeof(val1) !== 'number' || typeof(val2) !== 'number'){
            rej('not a number');
        }
        setTimeout(() => {
            res(val1 - val2);
        }); 
    })
  }
 
  sub(2, 3)
  .then(sub => {
      console.log(sub);
  })
  
  function pow(val1, val2) {
    return new Promise((res, rej) => {
        if(typeof(val1) !== 'number' || typeof(val2) !== 'number'){
            rej('not a number');
        }
        setTimeout(() => {
            res(val1 ** val2);
        });
        
    })
  }
  pow(2, 4)
  .then(pow => {
      console.log(pow);
  })
