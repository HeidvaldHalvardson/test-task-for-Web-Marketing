const pageTextRender = (data) => {
  const pageBox = document.querySelector('.page-text'); 

  data.map(item => {
    const pageTextItem = document.createElement(item.tag);
    pageTextItem.classList.add('page-text__item');
    pageTextItem.textContent = item.content;

    pageBox.append(pageTextItem);
  })
}

export {pageTextRender};
