function blueFunction() {
    const headercolor = document.getElementById('header');
    const footercolor = document.getElementById('footer');
    const blue = document.querySelector('.blue' || '.blue-off');
    const pink = document.querySelector('.pink');
    const orange = document.querySelector('.orange');
    
      headercolor.style.background = "linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)";
      footercolor.style.background = "rgba(81, 111, 251, 0.56)";
      blue.classList.add('blue-click');
      blue.classList.remove('blue-off');
      pink.classList.add('pink-off');
      orange.classList.add('orange-off');
      
}

function pinkFunction() {
    const headercolor = document.getElementById('header');
    const footercolor = document.getElementById('footer');
    const bluefp = document.querySelector('.blue'||'.blue-click');
    const pinkfp = document.querySelector('.pink'||'.pink-off');
    const orangefp = document.querySelector('.orange' || '.orange-click');

    headercolor.style.background = "linear-gradient(180deg, #FF99C4 44.17%, rgba(255, 255, 255, 0.12) 100%)";
    footercolor.style.background = "rgba(244, 155, 140, 0.56)";
    bluefp.classList.add('blue-off');
    pinkfp.classList.add('pink-click');
    pinkfp.classList.remove('pink-off')
    orangefp.classList.add('orange-off');
    
}
  
function orangeFunction() {
    const headercolor = document.getElementById('header');
    const footercolor = document.getElementById('footer');
    const bluefo = document.querySelector('.blue');
    const pinkfo = document.querySelector('.pink');
    const orangefo = document.querySelector('.orange'||'.orange-off');
    
    headercolor.style.background = "linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)";
    footercolor.style.background = "rgba(240, 94, 43, 0.56)";
    bluefo.classList.add('blue-off');
    pinkfo.classList.add('pink-off');
    orangefo.classList.add('orange-click');
    orangefo.classList.remove('orange-off');
    
} 

function pesquisar(){
    const pesquisa = document.querySelector('.barra-pesquisa');
    const textopesquisa = document.querySelector('.pesquisa-texto');

    pesquisa.classList.toggle('barra-pesquisa-web');
    textopesquisa.classList.toggle('pesquisa-texto-web');
}

function input(){
    const products = document.querySelectorAll(".product");
    const inputForm = document.getElementById('input');
    inputForm.addEventListener("keyup", (event) => {
        const nome = event.target.value.toLowerCase();
        const productsList = Array.from(products);
        for (let i = 0; i < productsList.length; i++) {
            if (!productsList[i].className.includes(nome)) {
                productsList[i].style.cssText = "display: none;"
            } else {
                productsList[i].style.cssText = "display: auto;"
            }
        }
    })
    console.log(products);
}

