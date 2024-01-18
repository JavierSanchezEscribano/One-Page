// Element.getBoundingClientRect() este metodo devuelve el tamaño de un elemento y su posición relativa en la ventana de visualización
// pageYOffset es una propiedad de la ventana de solo lectura que devuelve el numero de pixeles que se han scrolleado en el documento de forma vertical
// slice extrae una secion de un string sin modificar el original
//offsetTop - Un numero que representa la posicion top de un elemento en pixeles

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    //linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add("show.link");
    }else{
        topLink.classList.remove("show.link");
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        //prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        // calculate the height
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    });
});
