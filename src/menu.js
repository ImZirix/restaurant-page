import { content } from "./domLoader"
import pageLoad from "./pageLoad";

export const menu = (() => {
    content.textContent = '';
    const header = pageLoad.createElement('h2', 'Menu');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    const ul = pageLoad.createElement('ul');
    const li1 = pageLoad.createElement('li', 'Banana');
    const li2 = pageLoad.createElement('li', 'Apple');
    const li3 = pageLoad.createElement('li', 'orange');
    content.appendChild(header);
    content.appendChild(menuContainer);
    menuContainer.append(ul);
    ul.append(li1, li2, li3)
});

