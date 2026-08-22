let aviso = document.getElementById("aviso");
let cpf = document.getElementById("input-cpf");
let email = document.getElementById("input-email");
let botao_recuperar = document.getElementById("botao-recuperar");

// FORMATAÇÃO DO CPF


cpf.addEventListener("input", function() {
    let valor = cpf.value.replace(/\D/g, "");
    valor = valor.substring(0, 11);
    if (valor.length > 9) {
        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
            "$1.$2.$3-$4"
        );
    } else if (valor.length > 6) {
        valor = valor.replace(
            /^(\d{3})(\d{3})(\d{1,3})$/,
            "$1.$2.$3"
        );
    } else if (valor.length > 3) {
        valor = valor.replace(
            /^(\d{3})(\d{1,3})$/,
            "$1.$2"
        );
    }
    cpf.value = valor;
});

// RECUPERAÇÃO DE SENHA

botao_recuperar.addEventListener("click", function() {
    fetch("../dados/usuarios.json")
        .then(resposta => resposta.json())
        .then(dados => {
            let usuarioEncontrado = dados.usuarios.find(function(usuario) {
                return usuario.cpf === cpf.value
            });
            if (usuarioEncontrado) {
                let usuarioEncontrado = dados.usuarios.find(function(usuario) {
                    return usuario.email === email.value
                });
                if (usuarioEncontrado) {
                    aviso.style.color = "green";
                    aviso.textContent = "Sucesso.";
                    setTimeout(function() {
                        window.location.href = "nova-senha.html";}, 2300);
                } else {
                    aviso.style.color = "red";
                    aviso.textContent = "CPF ou email incorretos.";
                    cpf.value = "";
                    email.value = "";
                }
            } else {
                aviso.style.color = "red";
                aviso.textContent = "Conta não encontrada.";
                cpf.value = "";
                email.value = "";
            }
        });
});
