$('.owl-carousel').owlCarousel({
    loop:true, //efeito de loop se o valor for "true"
    margin:10,
    nav:true, //barrinha de navegação

    //responsividade
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})