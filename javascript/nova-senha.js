let titulo = document.getElementById("titulo");
let aviso = document.getElementById("aviso");
let paragrafo_senha_1 = document.getElementById("paragrafo-senha-1");
let input_senha_1 = document.getElementById("input-senha-1");
let paragrafo_senha_2 = document.getElementById("paragrafo-senha-2");
let input_senha_2 = document.getElementById("input-senha-2");
let botao_alterar = document.getElementById("botao-alterar");
let retornar = document.getElementById("retornar");
let senha_recuperada = document.getElementById("senha-recuperada");
let senha_confirmada = false
let nova_senha

senha_recuperada.style.display = "none";
retornar.style.display = "none";

aviso.textContent = "Preencha os campos abaixo";
aviso.style.color = "red";

botao_alterar.addEventListener("click", function() {
    if (senha_confirmada && input_senha_1.value === input_senha_2.value) {
        aviso.textContent = "Concluido.";
        aviso.style.color = "green";
        input_senha_1.value = "";
        input_senha_2.value = "";
        setTimeout(function() {
            titulo.textContent = "Senha Alterada";
            aviso.style.display = "none";
            paragrafo_senha_1.style.display = "none";
            input_senha_1.style.display = "none";
            paragrafo_senha_2.style.display = "none";
            input_senha_2.style.display = "none";
            botao_alterar.style.display = "none";
            senha_recuperada.style.display = "block";
            retornar.style.display = "block";
        }, 2300);
        
    } else {
        if (input_senha_1.value === input_senha_2.value) {
            aviso.textContent = "Pressionde novamente para alterar a senha.";
            aviso.style.color = "green";
            senha_confirmada = true
        } else {
            senha_confirmada = false
            aviso.textContent = "As senhas não coincidem, tente novamente.";
            aviso.style.color = "red";
            input_senha_1.value = "";
            input_senha_2.value = "";
        }
    }
});