import pageLoad from "./pageLoad";
//import './style.css'
import { menu }from "./menu";
import { home } from "./home"
import { about }  from "./about";
import './styles.scss';

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener('click', home);
aboutBtn.addEventListener('click', about)
menuBtn.addEventListener('click', menu);

document.addEventListener('DOMContentLoaded', () => {
    pageLoad.initializePage();
});