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
confEmail.addEventListener("input", function () {
  if (email.value != confEmail.value) {
    confEmail.classList.add("is-invalid");
  } else {
    confEmail.classList.remove("is-invalid");
    confEmail.classList.add("is-valid");
    email.classList.add("is-valid");
  }
});

//validar se as senhas são iguais
const senha = document.getElementById("formPassw");
const confSenha = document.getElementById("confPassw");
confSenha.addEventListener("input", function () {
  if (senha.value != confSenha.value) {
    confSenha.classList.add("is-invalid");
  } else {
    confSenha.classList.remove("is-invalid");
    confSenha.classList.add("is-valid");
    senha.classList.add("is-valid");
  }
});

const dtNasc = document.getElementById("formDate");

dtNasc.addEventListener("input", function (e) {
  var value = e.target.value;
  var dataPattern = value.replace(/$(\d{4})(\d+?$)/, "$1");
  e.target.value = dataPattern;

  let valor = dtNasc.value;
  let vetor = valor.split("-");
  let ano = vetor[0];
  if (ano < 1900 || ano > Date.now()) {
    dtNasc.classList.add("is-invalid");
  } else {
    dtNasc.classList.remove("is-invalid");
    dtNasc.classList.add("is-valid");
  }
});
