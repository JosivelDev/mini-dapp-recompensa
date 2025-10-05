const botaoCadastrar = document.getElementById(botaoCadastrar);
const nomeUsuarioInput = document.getElementById(nomeUsuario);

botaoCadastrar.addEventListener("click", () => {
    const nome = nomeUsuarioInput.value.trim();

    if (nome === ""){
        alert("Por favor, digite seu nome!");
        return;
    }

//salvar nome no navegador 
localstorage.setItem("nomeUsuario", nome);

//Redireciona para pag inicial
window.location.href = "index.html";

})