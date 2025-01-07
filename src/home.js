import { content } from "./domLoader";
import pageLoad from "./pageLoad";

export const home = () => {
    content.textContent = '';
    pageLoad.initializePage();

}

