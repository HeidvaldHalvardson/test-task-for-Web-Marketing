import{getData}from"./api.js";import{headRenderer}from"./head-rendering.js";import{navRenderer}from"./nav-rendering.js";import{breadcrumbsRenderer}from"./breadcrumbs-rendering.js";import{pageTitleRenderer}from"./page-title-rendering.js";import{productCardRenderer}from"./products-rendering.js";import{onSortChange}from"./sorting.js";import{pageTextRender}from"./page-text-rendering.js";const cardList=document.querySelector(".products__list");getData((e=>{headRenderer(e.page_meta),e.nav&&e.nav.length>0&&navRenderer(e.nav),e.breadcrumbs&&e.breadcrumbs.length>0&&breadcrumbsRenderer(e.breadcrumbs),e.page_meta.h1&&pageTitleRenderer(e.page_meta),e.stock&&e.stock.length>0?productCardRenderer(e.stock):cardList.innerHTML="<p>No Results</p>",e.stock&&e.stock.length>0&&onSortChange((()=>productCardRenderer(e.stock))),e.page_text&&e.page_text.length>0&&pageTextRender(e.page_text)}));