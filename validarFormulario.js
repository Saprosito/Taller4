function validarEmail(email){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(email);
    if(esValido == false){
        alert('El correo no es valido');
    }
}

function validarFormulario(){
   
    var formulario = document.addForm; 

    if(formulario.id.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su id.</div> ';
        formulario.id.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

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

    if(formulario.direccion.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su direccion.</div> ';
        formulario.direccion.focus();
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

    if(formulario.password.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su contraseña.</div> ';
        formulario.password.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.confirmarPassword.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor confirme su contraseña.</div> ';
        formulario.confirmarPassword.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.password.value != formulario.confirmarPassword.value){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingresar contraseña y confirmar contraseña iguales.</div> ';
        formulario.password.value="";
        formulario.confirmarPassword.value="";
        formulario.confirmarPassword.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }


    if(formulario.telefono.value == ""){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese su telefono.</div> ';
        formulario.telefono.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    if(formulario.telefono.value <= "100000"){
        document.getElementById("alerta").innerHTML = '<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Favor ingrese un numero de telefono valido.</div> ';
        formulario.telefono.focus();
        return false;
    }
    else{
        document.getElementById("alerta").innerHTML="";
    }

    formulario.submit();
}

<<<<<<< HEAD

=======
>>>>>>> main
