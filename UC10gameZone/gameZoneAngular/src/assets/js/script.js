$(document).ready(function() {
    
    let slideAtual = 1;
    let listaSlides = ["banner-ragnarok", "banner-horizon", "banner-eldenring", "banner-spider", "banner-sekiro","banner-tsushima"]

    setInterval(mudarSlide, 2000)

    function mudarSlide() {
        console.log("Slide atual:", slideAtual);

        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else if (slideAtual == 0) {
            $("#carrossel").removeClass(listaSlides[ (listaSlides.length) - 1 ])
        }

        $("#carrossel").addClass(listaSlides[slideAtual]);

        slideAtual++

        if(slideAtual > (listaSlides.length) - 1) {
            slideAtual = 0;
        }

    }
    
    $("#barras").click(function() {

        $("#menu").toggleClass("menu-ativo");
        
    })

})

function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}
function cadastro() {
    let email = document.getElementById("campo-email").value

    alert('Cadastrado realizado com sucesso')
    
}

// function login() {
//     let email = document.getElementById("campo-email").value

//     alert('Login realizado com sucesso')
    
// }

function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value

    alert('Email cadastrado com sucesso')
    
}
