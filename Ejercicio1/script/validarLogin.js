 
/* Validaciones de los campos */
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

  /* Ingresar al correo dinamico */
 /* function Enviar(){
  var nombres = document.getElementById("nombres").value;
  var email = document.getElementById("email").value;
 
  if ((nombres.value == " ") && (email.value == " ")){
     
    document.getElementById("para").innerHTML="nombres";
     
  }else{ */
    /* alert("Complete los campos: nombre y la clave") */
  //} 
//}
 
  