import leia from "readline-sync"

export default function atividade02() {

  var idade = leia.questionInt("Digite sua idade: ")

  if (idade < 12) {
    console.log("Voce e uma Crianca!")
  } else if (idade >= 12 && idade <= 17) {
    console.log("Voce e um Adolescente(a)!")
  } else if (idade >= 18 && idade <= 59) {
    console.log("Voce e um Adulto!")
  } else if (idade >= 60) {
    console.log("Voce e um Idoso!")
  }
}