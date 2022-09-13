function validarFormulario(){

    var formulario = document.addForm; 


    if(formulario.nombre.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su nombre.</div> ';
        formulario.nombre.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.apellido.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese sus apellidos.</div> ';
        formulario.apellido.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.email.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su correo.</div> ';
        formulario.telefono.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.usuario.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su usuario.</div> ';
        formulario.usuario.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.contraseña.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su contraseña.</div> ';
        formulario.password.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.confirmarContraseña.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor confirme su contraseña.</div> ';
        formulario.confirmarPassword.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.contraseña.value != formulario.confirmarContraseña.value){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingresar contraseña y confirmar contraseña iguales.</div> ';
        formulario.contraseña.value="";
        formulario.confirmarContraseña.value="";
        formulario.confirmarContraseña.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }


    formulario.submit();
}
function Verificarcheck() {
    element = document.getElementById("texto");
    check = document.getElementById("selector");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}

   