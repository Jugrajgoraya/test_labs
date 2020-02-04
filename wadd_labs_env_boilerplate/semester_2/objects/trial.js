// const obj1 = {a:'apple',b:'boy'};
// const obj2 = {a:'cat',c:'bat'};
// console.log(obj2);
// const obj3 =Object.assign(obj2,obj1);
// console.log(obj3);
// console.log(obj2);
// if(obj3 === obj2){
//     console.log('true');
    
// }else{
//     console.log('false');
    
// }
// const obj4 = Object.assign({},obj3);
// console.log(obj4);
// obj3.name='naveed'
// console.log(obj3);
// console.log(obj4);
// if(obj4===obj3){
//     console.log('true');
// }else{
//     console.log('false');
    
// }
const obj1 = {a:'apple',b:'boy'};
const obj2 = {a:'cat',c:'bat'};

const obj3 = {...obj1,obj2};
const copy ={...obj1};
console.log(obj3);

console.log( copy === obj1);
