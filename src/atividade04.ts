import leia from 'readline-sync'

export default function atividade04() {

  var numeroSorteado = Math.trunc(Math.random() * 10)
  var palpite

  while (palpite !== numeroSorteado) {
    palpite = leia.questionInt("Digite seu palpite: ")

    if (palpite > numeroSorteado) {
      console.log("E MENOR!")
    } else if (palpite < numeroSorteado) {
      console.log("E MAIOR!")
    } else if (palpite === numeroSorteado) {
      console.log(`PARABENS VOCE ACERTOU! Numero sorteado foi: ${numeroSorteado}`)
    }
  }
}