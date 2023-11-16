// function menuShow() {
//     let menuMobile = document.querySelector('.mobile-menu');
//     if (menuMobile.classList.contains('open')) {
//         menuMobile.classList.remove('open');
//         document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
//     } else {
//         menuMobile.classList.add('open');
//         document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
//     }
// }

const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);




function escreverMenuTitulo() {
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll(".lista__itens a");
  
    const scrollPosition = window.scrollY;
  
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        menuItems.forEach((item) => item.classList.remove("ativo"));
        menuItems[index].classList.add("ativo");
      }
    });
  }