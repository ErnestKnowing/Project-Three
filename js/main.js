(function () {
  const header = document.querySelector(".header");
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 200){
      header.classList.add('header_active')
    }
    if(scrollPosition < 200){
      header.classList.remove('header_active')
    }
  });
}());
