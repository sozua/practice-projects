import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import Dropdown from "./modules/dropdown.js";
import MobileMenu from "./modules/menu-mobile.js";
import AnimaNumeros from "./modules/anima-numeros.js";
import AnimateOnScroll from "./modules/scroll-anima.js";

const scrollSuave = new ScrollSuave('[data-anime="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const dropdown = new Dropdown("[data-dropdown]");
dropdown.init();

const mobileMenu = new MobileMenu("[data-menu='button']", "[data-menu='list']");
mobileMenu.init();

const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
animaNumeros.init();

const scrollAnima = new AnimateOnScroll('[data-anime="scroll"]');
scrollAnima.init();
