const inputNome = document.getElementById("inputNome");
const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    
    if (nome === ""){
        alert("Por favor, digite seu nome!")
        return;
    }

    //Salva o nome no navegador
    localStorage.setItem("nomeUsuario", nome);

    //Redireciona para a página inicial DApp
    window.location.href = "main.html";
})