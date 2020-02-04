//Given the following object:

const people = [
  {name: "anson", age: 45},
  {name: "brandon", age: 56},

]

//Write a function `happyBirthday(arr)` that returns the same object with all person's age property increased by 1. The original `people` array should not be changed


const people = [
  {name: "anson", age: 45},
  {name: "brandon", age: 56},
]

function happyBirthday(p) {
  return p.map(e => {
    return {...e, age: e.age + 1}
  });
}
console.log(happyBirthday(people));

happyBirthday(people);

// test('original array is not mutated', () => {
//   const arr = [
//     {name: "anson", age: 45},
//     {name: "brandon", age: 56},
//   ]
//   happyBirthday(arr);
//   expect(arr).toEqual([
//     {name: "anson", age: 45},
//     {name: "brandon", age: 56},
//   ]);
// });

// test('all objects age property have increased by 1', () => {
//   const arr = [
//     {name: "anson", age: 45},
//     {name: "brandon", age: 56},
//   ]
//   expect(happyBirthday(arr)).toEqual([
//     {name: "anson", age: 46},
//     {name: "brandon", age: 57},
//   ])
// })