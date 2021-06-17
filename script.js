function blueFunction() {
    const headercolor = document.getElementById('header');
    const footercolor = document.getElementById('footer');
    const animation = document.getElementById('blue-animation');
    
      headercolor.style.background = "linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)";
      footercolor.style.background = "rgba(81, 111, 251, 0.56)";
      animation.style.paddingBottom = "10px";
}

function pinkFunction() {
   const headercolor = document.getElementById('header');
   const footercolor = document.getElementById('footer');
   const animationpink = document.getElementById('pink-animation');

   headercolor.style.background = "linear-gradient(180deg, #FF99C4 44.17%, rgba(255, 255, 255, 0.12) 100%)";
    footercolor.style.background = "rgba(244, 155, 140, 0.56)";
    animationpink.style.paddingBottom = "10px";
    
}
  
function orangeFunction() {
    const headercolor = document.getElementById('header');
    const footercolor = document.getElementById('footer');
    const animationorange = document.getElementById('orange-animation');
    
    headercolor.style.background = "linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)";
    footercolor.style.background = "rgba(240, 94, 43, 0.56)";
    animationorange.style.paddingBottom = "10px";
    
}

function pesquisar(){
    const pesquisa = document.querySelector('.barra-pesquisa');
    const textopesquisa = document.querySelector('.pesquisa-texto');

    pesquisa.classList.toggle('barra-pesquisa-web');
    textopesquisa.classList.toggle('pesquisa-texto-web');
}