const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const createItem = ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
}
const items = ingredients.map(ingredient => createItem(ingredient));

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...items);
