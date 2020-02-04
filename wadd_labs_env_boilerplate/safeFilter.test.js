/**
Write a function to filter items based on their price
Stretch 1) Allow filtering via tags
Stretch 2) Allow filtering via name

*/

const items = [
  {name: 'bread', price: 2, tags: ['perishable', 'staple']},
  {name: 'cereal', price: 4, tags: ['perishable', 'staple']},
  {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
  {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
  {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
  {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
  {name: 'banana', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
  {name: 'apple', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
]

test('original array has not mutated', () => {
  const items = [
    {name: 'bread', price: 2, tags: ['perishable', 'staple']},
    {name: 'cereal', price: 4, tags: ['perishable', 'staple']},
    {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
    {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
    {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
    {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
    {name: 'banana', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
    {name: 'apple', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
  ]
  filter(items, 'fruit');
  expect(items).toEqual([
    {name: 'bread', price: 2, tags: ['perishable', 'staple']},
    {name: 'cereal', price: 4, tags: ['perishable', 'staple']},
    {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
    {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
    {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
    {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
    {name: 'banana', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
    {name: 'apple', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
  ]);
})

test('filtering by {price:2} returns array with only items with price = 2', () => {
  const items = [
    {name: 'bread', price: 2, tags: ['perishable', 'staple']},
    {name: 'cereal', price: 4, tags: ['perishable', 'staple']},
    {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
    {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
    {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
    {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
    {name: 'banana', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
    {name: 'apple', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
  ]
  expect(filter(items, {price: 2})).toEqual([
    {name: 'bread', price: 2, tags: ['perishable', 'staple']},
    {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']}
  ])
})

test("filtering by {tags: ['junk']} returns items where tags contains 'junk'", () => {
  const items = [
    {name: 'bread', price: 2, tags: ['perishable', 'staple']},
    {name: 'cereal', price: 4, tags: ['perishable', 'staple']},
    {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
    {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
    {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
    {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
    {name: 'banana', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
    {name: 'apple', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
  ]
  expect(filter(items, {tags: ['junk']})).toEqual([
    {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
    {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
  ])
})

test("filtering by {name: 'mil'} returns items where name contains 'mil'", () => {
  const items = [
    {name: 'bread', price: 2, tags: ['perishable', 'staple']},
    {name: 'cereal', price: 4, tags: ['perishable', 'staple']},
    {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
    {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
    {name: 'cheetos', price: 1, tags: ['perishable', 'junk', 'dairy']},
    {name: 'orange juice', price: 4, tags: ['perishable', 'junk', 'vitamin c', 'sugar', 'fruit']},
    {name: 'banana', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
    {name: 'apple', price: 1, tags: ['perishable', 'healthy', 'vitamin c', 'fruit']},
  ]
  expect(filter(items, {name: 'mil'})).toEqual([
    {name: 'milk Orgaic', price: 15, tags: ['perishable', 'staple', 'organic', 'dairy']},
    {name: 'milk', price: 2, tags: ['perishable', 'staple', 'dairy']},
  ])
})