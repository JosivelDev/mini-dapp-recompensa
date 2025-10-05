const botaoCadastrar = document.getElementById("botaoCadastrar");
const nomeUsuarioInput = document.getElementById("nomeUsuario");

botaoCadastrar.addEventListener("click", () => {
    const nome = nomeUsuarioInput.ariaValueMax.trim();
    
    if (nome === ""){
        alert("Por favor, digite seu nome!")
        return;
    }

    //Salva o nome no navegador
    localStorage.setItem("nomeUsuario", nome);

    //Redireciona para a página inicial DApp
    window.location.href = "index.html";
})