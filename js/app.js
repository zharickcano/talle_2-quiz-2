//(Errores: Evento mal escuchado, falta preventDefault, captura de datos errónea)
//codeJavaScript
// FALLA: El evento debe esperar a que el DOM cargue o estar al final del HTML
const form = document.getElementById("formulario-registro");
const lista = document.getElementById("lista-usuarios");

form.addEventListener("submit", function(e)  {
 // FALLA: Falta evitar que la página se recargue
  e.preventDefault();

 const id = document.getElementById("id_usuario").value;
 const nombre = document.getElementById("nombre").value; 
 const apellido = document.getElementById("apellido").value;
 const genero = document.getElementById("genero").value;

if(id === "" || nombre === "" || genero === "") {
        alert("Por favor, llene todos los campos");
        console.log('no vacio')
        return
    } else {
        // TAREA: Crear el elemento para mostrar los datos
        const info = document.createElement("p");
        info.innerHTML = `<strong>Registrado:</strong> ${nombre} ${apellido} (${genero}) - ID: ${id}`;
       
        lista.innerHTML ="";
        lista.appendChild(info);
        
        // Limpiar formulario
        form.reset();
    }

 /*FALLA: ¿Cómo capturo el género si el select no tiene ID?
 if (genero === ""){ 
    console.log("el genero es" + (genero));
 }
 if(id == "") {
 console.log("Error");
 } else {
 // TAREA: Crear un elemento en el HTML para mostrar los datos
 console.log("Datos capturados");
 }
procesarRegistro();*/

});


