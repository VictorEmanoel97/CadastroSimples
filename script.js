let caixatexto = document.getElementsByClassName("caixa");
const limp = document.getElementById("limpar");

const enviarr = document.getElementById("enviar");

function validar() {
    for (let i = 0; i < caixatexto.length; i++) {
        if (caixatexto[i].value == "") {
            alert("preencha o campo");
            return;
        }

   }
    alert("cadastro realizado com sucesso");
}
