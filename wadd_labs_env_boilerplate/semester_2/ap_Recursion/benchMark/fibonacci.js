function doFibonacci(n) {
    if (n < 2) {
        return n;
      }
      return doFibonacci(n-1) + doFibonacci(n-2);
}
console.log(doFibonacci(7));

function iterative(m) {
    let m1 = 0;
    let m2 = 1;
    let final = 0;
    for (let i = 2;i < m + 1; i++) {
        next = m1 + m2;
        m1 = m2;
        m2 = final;
    }
    return final;
}
console.time('recursive');
doFibonacci(20);
console.timeEnd('recursive');
console.time('iterative');
iterative(20);
console.timeEnd('iterative');