function greatestProduct(input) {
  let product = 0;
  for (let i = 1; i<=input.length-4; i++){
      let mult = 1;
      for (let j=i; j< 5+i; j++){
          mult = mult*input[j];    
      }
      if(product < mult){
          product = mult;
      }
  }
  return product;
}

  console.log(greatestProduct("123834539327238239583"));
  