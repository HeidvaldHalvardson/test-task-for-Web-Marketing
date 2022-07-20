const sortedItems = document.querySelector('.products__options-select');
const sortedItemsBottom = document.querySelector('.options-select-bottom');

const onSortChange = (cb) => {
  sortedItems.addEventListener('change', () => {
    sortedItemsBottom.value = sortedItems.value;
    cb();
  });
  sortedItemsBottom.addEventListener('change', () => {
    sortedItems.value = sortedItemsBottom.value;
    cb();
  })
};

const sortProducts = (data) => {
  const sortedItemsValue = document.querySelector('.products__options-select').value;
  const sortData = Array.from(data)

  if (sortedItemsValue === 'no-sort') {
    return data;
  }

  if (sortedItemsValue === 'price') {
    sortData.sort( (a, b) => a.price - b.price);
  }

  if (sortedItemsValue === 'mileage') {
    sortData.sort( (a, b) => a.mileage - b.mileage);
  }

  if (sortedItemsValue === 'year') {
    sortData.sort( (a, b) => a.year - b.year);
  }

  return sortData;
}

export {sortProducts, onSortChange};