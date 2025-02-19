import leia from "readline-sync"

export default function atividade01() {

  var nota = leia.questionInt("Digite sua nota de 0 a 100: ")

  if (nota >= 90 && nota <= 100) {
    console.log("Parabens sua nota foi A")
  } else if (nota >= 80 && nota <= 89) {
    console.log("Parabens sua nota foi B")
  } else if (nota >= 70 && nota <= 79) {
    console.log("Parabens sua nota foi C")
  } else if (nota >= 60 && nota <= 69) {
    console.log("Parabens sua nota foi D")
  } else if (nota > 0 && nota < 60) {
    console.log("Parabens sua nota foi E")
  } else {
    console.log("NOTA INVALIDA!!!")
  }
}