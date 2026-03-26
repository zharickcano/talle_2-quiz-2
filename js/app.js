
const form = document.getElementById("formulario-registro");
const lista = document.getElementById("lista-usuarios");

form.addEventListener("submit", function(e)  {

  e.preventDefault();

 const id = document.getElementById("id_usuario").value;
 const nombre = document.getElementById("nombre").value; 
 const apellido = document.getElementById("apellido").value;
 const genero = document.getElementById("genero").value;

if(id === "" || nombre === "" || genero === "") {
        alert("Por favor, llene todos los campos");
        console.log('vacio')
        return
    } else {
       
        const info = document.createElement("p");
        info.innerHTML = `<strong>Registrado:</strong> ${nombre} ${apellido} (${genero}) - ID: ${id}`;
       
        lista.appendChild(info);
        
        
        form.reset();
    }



});


