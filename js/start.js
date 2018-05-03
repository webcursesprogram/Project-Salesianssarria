var favoritePhare = "My favorite dessert is jello";

console.log("Esta en la posicion", favoritePhare.indexOf("j"));

var idioma = prompt("Seleccione un idioma para imprimir el tipico HELLO WORLD :\n1. Español\n2. Ingles\n3. Catalan");

switch (idioma) {
    case "1":
    window.alert("Hola Mundo");
    console.log("Hola Mundo");
    break;
    case "2":
    window.alert("Hello World");
    console.log("Hello World");
    break;
    case "3":
    window.alert("Hola Mon");
    console.log("Hola mon");
    break;
    default:
    prompt("Elige algun idioma!")
}
