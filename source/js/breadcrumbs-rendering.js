const breadcrumbsRenderer = (data) => {
  const navMenu = document.querySelector('.breadcrumbs');

  const navList = document.createElement('ul');
  navList.classList.add('breadcrumbs__list');
  navMenu.append(navList);

  for (let i = 0; i < data.length; i++) {
    const navItem = document.createElement('li');
    navItem.classList.add('breadcrumbs__item');
    navList.append(navItem);

    const navLink = document.createElement('a');
    navLink.classList.add('breadcrumbs__link');
    navLink.href = data[i].href;
    navLink.textContent = data[i].text;
    navItem.append(navLink);
  }
}

export {breadcrumbsRenderer};