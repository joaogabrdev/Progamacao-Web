let usuarioLogado = localStorage.getItem("usuarioLogado");
let nome = document.getElementById("nome");
let foto_de_perfil = document.getElementById("foto-de-perfil");
let aviso = document.getElementById("aviso");
let email = document.getElementById("email");
let matricula = document.getElementById("matricula");
let curso = document.getElementById("curso");
let periodo = document.getElementById("periodo");
let cpf = document.getElementById("cpf");
let botao_perfil = document.getElementById("botao-perfil");
let botao_boletim = document.getElementById("botao-boletim");
let botao_disciplinas = document.getElementById("botao-disciplinas");
let botao_projetos = document.getElementById("botao-projetos");


fetch("../dados/usuarios.json")
    .then(resposta => resposta.json())
    .then(dados => {
        let usuarioEncontrado = dados.usuarios.find(function(usuario) {
            return usuario.usuario === usuarioLogado;
        });
        if (usuarioEncontrado) {
            nome.textContent = " " + usuarioEncontrado.nome
            foto_de_perfil.src = " " + usuarioEncontrado.foto_de_perfil
            email.textContent += " " + usuarioEncontrado.email
            matricula.textContent += " " + usuarioEncontrado.usuario
            curso.textContent += " " + usuarioEncontrado.curso
            periodo.textContent += " " + usuarioEncontrado.periodo + "º"
            cpf.textContent += " " + usuarioEncontrado.cpf
        }
    });

botao_perfil.addEventListener("click", function() {
    email.style.display = "block"
    matricula.style.display = "block"
    curso.style.display = "block"
    periodo.style.display = "block"
    cpf.style.display = "block"
    aviso.style.display = "none"
});

botao_boletim.addEventListener("click", function() {
    email.style.display = "none"
    matricula.style.display = "none"
    curso.style.display = "none"
    periodo.style.display = "none"
    cpf.style.display = "none"
    aviso.style.display = "block"
    aviso.textContent = "(BOLETIM) Em Desenvolvimento."
    aviso.style.color = "red"
});

botao_projetos.addEventListener("click", function() {
    email.style.display = "none"
    matricula.style.display = "none"
    curso.style.display = "none"
    periodo.style.display = "none"
    cpf.style.display = "none"
    aviso.style.display = "block"
    aviso.textContent = "(PROJETOS) Em Desenvolvimento."
    aviso.style.color = "red"
});

botao_disciplinas.addEventListener("click", function() {
    email.style.display = "none"
    matricula.style.display = "none"
    curso.style.display = "none"
    periodo.style.display = "none"
    cpf.style.display = "none"
    aviso.style.display = "block"
    aviso.textContent = "(DISCIPLINAS) Em Desenvolvimento."
    aviso.style.color = "red"
});

botao_projetos.addEventListener("click", function() {
    email.style.display = "none"
    matricula.style.display = "none"
    curso.style.display = "none"
    periodo.style.display = "none"
    cpf.style.display = "none"
    aviso.style.display = "block"
    aviso.textContent = "(PROJETOS) Em Desenvolvimento."
    aviso.style.color = "red"
});