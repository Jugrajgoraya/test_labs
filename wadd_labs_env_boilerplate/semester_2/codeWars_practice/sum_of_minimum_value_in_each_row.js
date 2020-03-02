function sumOfMinimums(arr) {
    let result = 0;
    for(let smlarr of arr){
        let min = 1/0;
        for(char of smlarr){
            if(char < min){
                min = char ;
            }
        }
        result += min;
    }
    return result;
  }

  console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
  