/*Carga previa a mostrar contenido de página*/
window.onload = function(){
    $("#preload").fadeOut();
    $("body").removeClass("hidden");
};

/*Menu*/
((d) => {
    //Se declaran anteponiendo el $ porque 
    //están haciendo referencia a un elemento del DOM
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu"),
    $check = d.querySelector(".check");

    $btnMenu.addEventListener("click", e => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if(!e.target.matches(".menu a")) return false;
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active")
    });    

})(document);

/*Contact Form*/
((d) => {

const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contacto-form-response");

    $form.addEventListener('submit', e=> {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/alberinijuan@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then(json=> {
        console.log(json);
        location.hash = "#gracias";
        $form.reset()
    })
    .catch(err => {
        console.log(err)
        let message = err.status.text || "Ocurrio un error al enviar, intenta nuevamente."
        $response.querySelector("h3").innetHTML = `Error ${err.status}:${message}`
    })
    .finally(() => {
        $loader.classList.add("none");
        setTimeout(()=> {
            location.hash = "#close"
        }, 3000)
    })
})
})(document);

/*Owl Carousel whit JQuery*/
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    autoplayTimeout: 100000000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



