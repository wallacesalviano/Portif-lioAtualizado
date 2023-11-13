function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

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