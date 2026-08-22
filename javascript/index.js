let titulo = document.getElementById("titulo");
let aviso = document.getElementById("aviso");
let input_usuario = document.getElementById("input-usuario");
let input_senha = document.getElementById("input-senha");
let botao_entrar = document.getElementById("botao-entrar");


// LOGIN

botao_entrar.addEventListener("click", function() {

    let usuarioDigitado = input_usuario.value.toUpperCase();

    fetch("dados/usuarios.json")
        .then(resposta => resposta.json())
        .then(dados => {
            let usuarioEncontrado = dados.usuarios.find(function(usuario) {
                return usuario.usuario === usuarioDigitado;
            });
            if (
                usuarioEncontrado &&
                usuarioEncontrado.senha === input_senha.value
            ) {
                aviso.style.color = "green";
                aviso.textContent =
                    "Login efetuado com sucesso.";
                let primeiroNome = usuarioEncontrado.nome.split(" ")[0];
                titulo.textContent =
                    `Bem-vindo, ${primeiroNome}!`;
                    localStorage.setItem(
                        "usuarioLogado",usuarioEncontrado.usuario);
                setTimeout(function() {
                    window.location.href = "paginas/login.html";
                }, 2300);
            } else {
                aviso.style.color = "red";
                aviso.textContent =
                    "Usuário ou senha incorretos.";
                input_usuario.value = "";
                input_senha.value = "";
            }
        })
});
