import {getData} from "./api.js";
import {headRenderer} from "./head-rendering.js";
import {navRenderer} from "./nav-rendering.js"
import {breadcrumbsRenderer} from "./breadcrumbs-rendering.js";
import {pageTitleRenderer} from "./page-title-rendering.js";
import {productCardRenderer} from "./products-rendering.js";
import {onSortChange} from "./sorting.js";
import {pageTextRender} from "./page-text-rendering.js";

const cardList = document.querySelector('.products__list');

getData(data => {
  headRenderer(data.page_meta);
  
  if (data.nav && data.nav.length > 0) {
    navRenderer(data.nav);
  }
  
  if (data.breadcrumbs && data.breadcrumbs.length > 0) {
    breadcrumbsRenderer(data.breadcrumbs)
  }
  
  if (data.page_meta.h1) {
    pageTitleRenderer(data.page_meta);
  }
  
  (data.stock && data.stock.length > 0) ? productCardRenderer(data.stock) : cardList.innerHTML = '<p>No Results</p>';
  
  if (data.stock && data.stock.length > 0) {
    onSortChange(() => productCardRenderer(data.stock));
  }
  
  if (data.page_text && data.page_text.length > 0) {
    pageTextRender(data.page_text);
  }
})

