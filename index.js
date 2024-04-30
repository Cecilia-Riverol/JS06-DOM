//DOM API
// OBTENER ELEMENTOS POR ID
//

const div1 = document.getElementById("div-1");
console.log(div1);

const divColletion = document.getElementsByTagName ("div");
console.log(divColletion);

const p = document.getElementById("p1");
const userNameInputs = document.getElementsByName("userName");
const userNameInput = userNameInputs[0];

//Events
//Cualquier evento que coincida con lo que voy a decir haga la siguiente funcionalidad.

//Tiene dos tipos de parametros, primero el evento que va a utilizar, y luego lo que va a suceder
//userNameInput.addEventListener ("input", (event) => console.log(event));


//En este caso lo que sucedió es que muestra EL VALOR del input conforme se va escribiendo
userNameInput.addEventListener ("input", (event) => {
    console.log(event.target.value);
    //Esto me permite ir llenado mi párrafo con lo que vaya escribiendo mi usuario.
    p.innerText = event.target.value; 
});

console.log(p,userNameInput);