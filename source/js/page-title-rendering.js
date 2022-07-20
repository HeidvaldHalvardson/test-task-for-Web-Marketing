const pageTitleRenderer = (data) => {
  const pageTitle = document.querySelector('.product-page__title');
  
  pageTitle.textContent = data.h1;
}

export {pageTitleRenderer};