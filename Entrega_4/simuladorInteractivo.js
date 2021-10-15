alert("Cotiza el precio del grooming para tu mascota")
alert("Selecciona una opción: ")
alert("¿Que mascota tienes?: ")
let seleccion = parseInt(prompt("1. Perro 2. Gato"))
alert("¿Tiene pelo largo o corto?")
let tamano = parseInt(prompt("1. Largo 2. Corto"))
let precioFinal = precioCorte(seleccion, tamano)

alert("El precio del servicio es " + "$ "+precioFinal)



function precioCorte(seleccion, tamano) {
    this.seleccion
    this.tamano
    const precioKilo = 7000
    const recargoPeloLargo = 8000
    const recargoPeloCorto = 0
    const recargoGato = 10000
    if (seleccion == 1) {
        if (tamano == 1) {
            let tamanoLargo = precioKilo * 5
            let precioTotal = tamanoLargo + recargoPeloLargo
            return precioTotal
        } else if (tamano == 2) {
            let tamanoCorto = precioKilo * 10
            return tamanoCorto
        }
    } else if (seleccion == 2) {
        let precioGato = precioKilo * 10
        let precioTotalGato = precioGato + recargoGato
        return precioTotalGato
    } else {
        return false
    }

}


