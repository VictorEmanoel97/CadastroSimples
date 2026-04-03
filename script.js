let caixatexto = document.getElementsByClassName("caixa");
let senha = document.getElementById("senha");
const enviarr = document.getElementById("botao-cadastro");

function cadastrar() {
    for (let i = 0; i < caixatexto.length; i++) {
        if (caixatexto[0].value == "") {
            alert("preencha seu nome completo");
            return;
       
        }
         else if (caixatexto[1].value == "") {
            alert("preencha sua data de nascimento");
            return;
        }
   }
    alert("cadastro realizado com sucesso");
}

