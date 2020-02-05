function pow(n1, n2) {
    if(n2 === 0){
        return 1;
    }
    return n1 * pow(n1, (n2-1));
}

console.log(pow(10, 3)) // 1000

console.log(pow(2, 4)) // 16

console.log(pow(0, 100)) // 0

console.log(pow(1, 1000)) // 1