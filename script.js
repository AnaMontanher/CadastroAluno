const alert = document.getElementById("alert");

function alertOnSubmit(event) {
  {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  }
  alert.classList.remove("visually-hidden");
}

(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
const reset = document.getElementById("reset");
const forms = document.getElementById("form");

reset.addEventListener("click", function () {
  forms.classList.remove("was-validated");
  forms.classList.remove("is-invalid");
  forms.classList.remove("is-valid");
  forms.classList.remove("form-control:invalid");
  forms.classList.remove("invalid-feedback");
  alert.classList.add("visually-hidden");
  confSenha.classList.remove("is-valid");
  senha.classList.remove("is-valid");
  dtNasc.classList.remove("is-valid");
  confEmail.classList.remove("is-valid");
  email.classList.remove("is-valid");
});
