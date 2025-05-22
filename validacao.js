const btnSubmit = document.getElementById("submit");
inputs = document.getElementsByTagName("input");

cpf = document.getElementById("formCpf");
cpf.addEventListener("input", function (e) {
  var value = e.target.value;
  var cpfPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})(\d+?$)/, "$1");
  e.target.value = cpfPattern;
});
const tel = document.getElementById("formTel");
tel.addEventListener("input", function (e) {
  var value = e.target.value;
  var telPattern = value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?$)/, "$1");

  e.target.value = telPattern;
});
//validar se os emails são iguais
const email = document.getElementById("formEmail");
const confEmail = document.getElementById("confEmail");
confEmail.addEventListener("input", function (e) {
  if (email.value != confEmail.value) {
    confEmail.classList.add("is-invalid");
  } else {
    confEmail.classList.add("is-valid");
  }
});

//validar se as senhas são iguais

const senha = document.getElementById("formPassw");
const confSenha = document.getElementById("confPassw");
confSenha.addEventListener("input", function (e) {
  if (senha.value != confSenha.value) {
    confSenha.classList.add("is-invalid");
  } else {
    confSenha.classList.add("is-valid");
  }
});
