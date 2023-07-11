const elementos = document.querySelectorAll('[data-anima]');
console.log(elementos);
const animacaoClass = 'animated';

function animaScroll(){
    const topoPaginaNaJanela = window.pageYOffset+((window.innerHeight*4)/4);
    console.log('opa')
    elementos.forEach(element => {
        topoPaginaNaJanela >= element.offsetTop && element.classList.add(animacaoClass);

    });
}

if(elementos.length){
    window.addEventListener("scroll", () => animaScroll());
}



function menuStateToggle(x) {
    x.classList.toggle("open");
    document.getElementById('body-menu').classList.toggle('open-menu');
  }