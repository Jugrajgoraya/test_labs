const obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };

  Object.prototype.getByPath = function(string){
    const keys = string.split(".");
    let currentValue = this;
    for(let key of keys){
      if(!currentValue[key]){
      return undefined;
      }else {
        currentValue = currentValue[key];  
      }  
    }
    return currentValue;
  }

  console.log(obj.getByPath("person.history.bio"));

  