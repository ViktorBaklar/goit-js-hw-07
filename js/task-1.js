// const items = categories.children;
const items = categories.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);
// const itemName = categories.querySelector('.item').firstElementChild.textContent;
// console.log(itemName);
const item1Name = categories.firstElementChild.firstElementChild.textContent;
const item1Length = categories.firstElementChild.lastElementChild.children;
const item1Properties = {
  'категория': item1Name,
  'Количество элементов': item1Length.length,
};
const item2Name = categories.firstElementChild.nextElementSibling.firstElementChild.textContent;
const item2Length = categories.firstElementChild.nextElementSibling.lastElementChild.children;
const item2Properties = {
  'категория': item2Name,
  'Количество элементов': item2Length.length,
};
const item3Name = categories.lastElementChild.firstElementChild.textContent;
const item3Length = categories.lastElementChild.lastElementChild.children;
const item3Properties = {
  'категория': item3Name,
  'Количество элементов': item3Length.length,
};

console.log(item1Properties);
console.log(item2Properties);
console.log(item3Properties);
