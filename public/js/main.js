import initScrollSmooth from "./modules/scroll-smooth.js";
import initAnimationScroll from "./modules/scroll-animation.js";
import initAccordion from "./modules/accordion-list.js";
import initTab from "./modules/tab.js";
import initAnimaNumeros from "./modules/anima-numeros.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import { Slide, SlideNav } from "./modules/slide.js";

initScrollSmooth();
initAnimationScroll();
initAccordion();
initTab();
initAnimaNumeros();
initModal();
initToolTip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

// slide
const slide = new SlideNav(".slide-wrapper", ".slide");
slide.init();
slide.addControl(".custom-control");
