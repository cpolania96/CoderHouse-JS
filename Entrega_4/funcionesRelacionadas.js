alert("Cálculo de area de un circulo")
let radio = parseInt(prompt("Ingrese el radio del circulo"))
let resultadoArea = areaCirculo(radio)
alert("El area del circulo es " + resultadoArea)

function areaCirculo(radio) {
    this.radio
    const pi = Math.PI
    let area = pi * Math.pow(radio, 2)
    return area
}