
const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`В списке ${items.length} категории.`);

const categoryProperties = items.forEach(item => {
  const itemName = item.firstElementChild.textContent;
  const itemValue = item.lastElementChild.children;
  console.log({
    'категория': itemName,
    'Количество элементов': itemValue.length,
    });
});
