// Função para alternar a classe do menu
function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}

// Seleciona os elementos necessários
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

// Função para mostrar o formulário de login
function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

// Função para mostrar o formulário de registro
function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

// Adiciona os manipuladores de evento para os botões
document.addEventListener('DOMContentLoaded', function() {
    if (a) {
        a.addEventListener('click', login);
    }
    if (b) {
        b.addEventListener('click', register);
    }
});
