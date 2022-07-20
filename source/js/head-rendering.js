const headRenderer = (data) => {
  const title = document.querySelector('title');
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  const metaDescription = document.querySelector('meta[name="description"]');

  if (data.title) {
    title.textContent = data.title;
  }
  
  if (data.meta_keywords) {
    metaKeywords.content = data.meta_keywords;
  }
  
  if (data.meta_description) {
    metaDescription.content = data.meta_description;
  }
}

export {headRenderer}