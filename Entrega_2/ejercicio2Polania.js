//Declaracion de variables

alert("¿Te gustaria saber si con la nota que sacaste pasas la materia?")
let nota = parseInt(prompt("Ingresa tu nota"))

if (nota > 5) {
    alert("No puedes ingresar ese numero, la nota máxima es 5")
} else if (nota >= 4) {
    alert("Felicidades, tuviste una nota excelente")
} else if (nota >= 3 && nota <= 4) {
    alert("Tuviste una nota aceptable, pero pasas la materia")
}else if (nota <= 3) {
    alert("Ups, perdiste la materia, debes presentar un supletorio")
}