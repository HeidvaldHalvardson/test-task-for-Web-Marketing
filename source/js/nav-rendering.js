const navRenderer = (data) => {
  const navMenu = document.querySelector('.main-nav');

  const navList = document.createElement('ul');
  navList.classList.add('main-nav__list');
  navMenu.append(navList);

  for (let i = 0; i < data.length; i++) {
    const navItem = document.createElement('li');
    navItem.classList.add('main-nav__item');
    navList.append(navItem);

    const navLink = document.createElement('a');
    navLink.classList.add('main-nav__link');
    navLink.href = data[i].href;
    navLink.textContent = data[i].text;
    navItem.append(navLink);
  }
}

export {navRenderer};