(function () {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      header.classList.add("header_active");
    }
    if (scrollPosition < 200) {
      header.classList.remove("header_active");
    }
  });
}());
(function(){
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav");
  const menuClose = document.querySelector(".header_nav-close")
  burger.addEventListener("click", function () {
    menu.classList.add("header_nav_active");
  });
  menuClose.addEventListener("click", function () {
    menu.classList.remove("header_nav_active");
  });

}())

