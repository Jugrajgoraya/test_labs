function doFact(n) {
    if (n === 0) {
        return 1;
      }
      
      return n * doFact(n-1);
}
console.log(doFact(5));