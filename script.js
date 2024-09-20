// Evento que é disparado quando a página termina de ser carregada
document.addEventListener('DOMContentLoaded', function() {
  console.log('Página carregada com sucesso!');
});

const formLogin = document.getElementById("formLogin");
const txtEmail = document.getElementById("txtEmail"); // referência para o campo de email
const txtSenha = document.getElementById("txtSenha"); // referência para o campo de senha
const alerta = document.getElementById("alerta");
const msgErro = document.getElementById("msgErro"); 

function showErrorMessage(message) {
    msgErro.innerText = message;
    alerta.classList.add("show");
}

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // pegar o valor digitado no campo txtEmail
    console.log("Valor digitado no campo de email:", txtEmail.value);

    // pegar o valor digitado no campo txtSenha
    console.log("Valor digitado no campo de senha:", txtSenha.value);
    
    const email = txtEmail.value.trim();
    const senha = txtSenha.value.trim();

    // verificar se o email é válido
    if (email === "") {
        showErrorMessage("O campo de email é obrigatório!");
        return;
    }

    // verificar se o email tem arroba
    if (!email.includes("@")) {
        showErrorMessage("O email deve conter o caractere @!");
        return;
    }
    
    // verificar se a senha é válida
    if (senha === "") {
        showErrorMessage("O campo de senha é obrigatório!");
        return;
    }

    // Verificar se a senha tem no mínimo 3 caracteres
    if (senha.length < 3) {
        showErrorMessage("A senha deve ter no mínimo 3 caracteres!");
        return;
    }

    // caso não seja, apresentar uma mensagem de erro ao usuário
    // caso seja, apresentar uma mensagem de login efetuado com sucesso

    alert('Login efetuado com sucesso!');
    // esconder a mensagem de erro
    
});