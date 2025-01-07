import { content } from "./domLoader";
import menu from "./menu";

const pageLoad = (() => {
    const clearContent = () => {
        content.textContent = '';
    };

    const createElement = (tag, textContent = '', attributes = {}) => {
        const element = document.createElement(tag);
        if (textContent) element.textContent = textContent;
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
        return element;
    };

    const initializePage = () => {
        clearContent();

        const header = createElement('h1', 'Welcome to my website');
        const paragraph = createElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor ipsam neque corrupti dolores, fugiat at possimus cupiditate dignissimos assumenda animi impedit qui facere veritatis sapiente eum doloribus optio! Atque?');
        const img = createElement('img', '', { src: 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg' });
        content.append(header, paragraph, img);
    };

    return {
        initializePage,
        createElement,
    };
})();

export default pageLoad;
