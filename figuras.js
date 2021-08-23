// Codigo cuadrado

console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado *4;

}
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado **2;

}

//console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");


console.groupEnd();

console.group("Triagulos")
// Codigo triangulo


//const ladoTriangulo2 = 6;

//const ladoTriangulo1 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triangulo miden: " 
//+ ladoTriangulo1+ "cm, " 
//+ ladoTriangulo2+ "cm, " 
//+ baseTriangulo+ "cm"
//);

//console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(ladoTriangulo1,  ladoTriangulo2,  baseTriangulo) {

    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

}

//console.log("El permitro del traingulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(baseTriangulo, alturaTriangulo) {

    return (baseTriangulo * alturaTriangulo)/2;

}

//console.log("El area del triagnulo es: " + areaTriangulo + " cm2");

console.groupEnd();

console.group("Circulos");

/*
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");
*/

function diametroCirculo(radioCirculo){

    return radioCirculo*2;

} 

//console.log("El diametro del circulo es: " + diametroCirculo + " cm");

//const PI = Math.PI;

function perimetroCirculo(radioCirculo) {

    const diametroCirculo = radioCirculo*2;
    return  diametroCirculo * Math.PI;

} 

//console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");


function areaCirculo(radioCirculo){

    return Math.PI * radioCirculo **2;

} 
//console.log("El area del circulo es: " + areaCirculo + " cm2");

console.groupEnd();


//Interaccion HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);


}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);

}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);

    alert(perimetro);


}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);

}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);


}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);

    alert(area);

}


