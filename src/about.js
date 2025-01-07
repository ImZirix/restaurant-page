import { content } from "./domLoader";
import pageLoad from "./pageLoad";

export const about = () => {
    content.textContent = '';
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    const header = pageLoad.createElement('h2', 'About');
    const ul = pageLoad.createElement('ul');
    const li1 = pageLoad.createElement('li', 'Phone: ');
    const li2 = pageLoad.createElement('li', 'Email: ');
    const li3 = pageLoad.createElement('li', 'WhatsApp: ');

    content.appendChild(header);
    content.appendChild(menuContainer);
    menuContainer.append(ul);
    ul.append(li1, li2, li3);
}