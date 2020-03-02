function minCoins(amount){
    let money = amount.toString();
    let arr = money.split('');
    let newarr ;
    if(arr.includes('.')){
        newarr = arr.join('').split('.');
    }

   let firstrem = newarr[0]%2 ;
   let devOfTwo = (newarr[0]-firstrem)/2;
   let devOfOne = firstrem;
   if(newarr[1].length = 1){
     devOfFifty = newarr[1]%.5
   }
}
console.log(minCoins("23.3"));

