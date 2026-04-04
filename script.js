const caixatexto = document.querySelectorAll(".caixa");
const senha = document.getElementById("senha");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mostrarSenha = document.getElementById("mostrar-senha");

function showpassword() {
    if (senha.type === "password") {
        senha.type = "text";
        mostrarSenha.value = "🐵";
    } else {
        senha.type = "password";
        mostrarSenha.value = "🙈";
    }
}

function validarEMAIL(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}

function cadastrar() {
    let camposVazios = false;
    for (let i = 0; i < caixatexto.length; i++) {
        if (caixatexto[i].value === "") { 
            caixatexto[i].style.border = "2px solid red";
            camposVazios = true;
            } else {
            caixatexto[i].style.border = "";
        }
       
    } 
        
        if (camposVazios) {
           alert("Todos os campos são obrigatórios. Por favor, preencha-os.");
           return; 
    }
    
    const nomevar = nome.value.trim();
        if (!nomevar.includes(" ") || nomevar.split(" ").length < 2) {
        alert("O campo nome é obrigatório e deve conter pelo menos dois nomes.");
        return;
}

    if (!validarEMAIL(email.value)) {
        email.style.border = "2px solid red";
        alert("O campo email é obrigatório e deve conter um endereço de email válido.");
        return;
    }

    if (senha.value.length < 7) {
        senha.style.border = "2px solid red";
        alert("O campo senha é obrigatório e deve conter pelo menos 7 caracteres.");
        return;
    }
    
    for (let i = 0; i < caixatexto.length; i++) {
        caixatexto[i].value = "";
        caixatexto[i].style.border = "";
        
    }
    
    alert("cadastro realizado com sucesso"); 
}