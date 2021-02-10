const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const btnForm = document.getElementById('btnFormulario');


//EventListeners
form.addEventListener('submit', validarForm);

function validarForm(e) {

e.preventDefault();

//expresiones regulares
let expNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let expCorreo = /^\w+@(\w+\.)+\w{2,4}$/;
let expTelefono = /^\d{7,14}$/;

//Campo nombre
  if(!nombre.value)
  {
    swal('',"El campo nombre es requerido",'error');
    nombre.focus();
    return false;
  }
  if (!expNombre.exec(nombre.value))
  {
      swal('',"El campo nombre admite letras y espacios.", 'error');
      nombre.focus();
      return false;
  }
   //campo email
  if(!correo.value)
  {
    swal('',"El campo Email es requerido",'error');
    correo.focus();
    return false;
  }
  if(!expCorreo.exec(correo.value))
  {
    swal('',"El campo Email no tiene el formato correcto.", 'error');
    correo.focus();
    return false;
  }

//campo telefono
  if(!telefono.value)
  {
    swal('',"El campo Whatsapp es requerido", 'error');
    telefono.focus();
    return false;
  }
  if(!expTelefono.exec(telefono.value))
  {
    swal('',"El campo Whatsapp no tiene el formato correcto.", 'error');
    telefono.focus();
    
    return false;
  }


  let dataForm = new FormData()

  dataForm.append('txtNombre',nombre.value)
  dataForm.append('txtEmail',correo.value)
  dataForm.append('txtTlf',telefono.value)

  fetch(form.action,{
      method:'POST',
      body:dataForm
  }).then(function(resp){
    console.log(resp)
      if(resp.ok){
        swal('','¡Gracias por realizar tu pre-reserva! Nos vamos a comunicar pronto para enviarte más información.', 'success');
        form.reset();
      }
  }).cath(function(e){
      swal('', 'Ocurrió un error, por favor intentar más tarde', 'error');
    })
  
}
