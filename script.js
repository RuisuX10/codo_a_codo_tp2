// Declaramos las variables con las que vamos a trabajar

let borrar = document.getElementById("btn-borrar");
let resumen = document.getElementById("btn-resumen");
let aPagar = document.getElementById("aPagar");

let precio = 200;
let total = 0;

// Funcion para el boton Resumen
function calcularTotal(){
    // Declaramos las variables
let cant = parseInt(document.getElementById("cant").value);
let cat = document.getElementById("categoria").value;

if(cant<1 || cant )

switch (cat) {
    case "estudiante":
        total = (precio - precio*0.8)*cant;
        aPagar.innerHTML = total;
        break;
    case "trainee":
        total = (precio - precio*0.5)*cant;
        aPagar.innerHTML = total;
        break;
        break;
    case "junior":
        total = (precio - precio*0.15)*cant;
        aPagar.innerHTML = total;
        break;
        break;
    default:
        break;
}

};

resumen.addEventListener('click', calcularTotal);

// Funcion para el boton borrar
function borrarF(){
    location.reload()
}

borrar.addEventListener('click', borrarF)