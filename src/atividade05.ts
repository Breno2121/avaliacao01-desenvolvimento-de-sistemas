import leia from 'readline-sync'

export default function atividade05() {

  var jogadores: any[] = []
  var NumeroJogador = 1;
  var maior = 0;
  var index = 0;

  for (var i = 0; i <= 2; i++) {
    var nome = leia.question(`Digite o nome do jogador ${NumeroJogador}: `)
    var gols = leia.questionInt(`Digite o numero de gols do jogador ${NumeroJogador}: `)
    var passesCerto = leia.questionInt(`Digite o numero de passes certos do jogador ${NumeroJogador}: `)
    var passesErrados = leia.questionInt(`Digite o numero de passes errados do jogador ${NumeroJogador}: `)
    var pontuacao = ((gols * 50) + (passesCerto * 10)) - (passesErrados * 5)

    if (pontuacao < 50) {
      console.log("Pessima partida!")
    } else if (pontuacao >= 50 && pontuacao < 100) {
      console.log("Partida ruim!")
    } else if (pontuacao >= 100 && pontuacao < 150) {
      console.log("Fez o basico!")
    } else if (pontuacao >= 150 && pontuacao < 200) {
      console.log("Foi bem na partida!")
    } else if (pontuacao >= 200) {
      console.log("Jogou demais!!!")
    }

    if (i === 0) {
      maior = pontuacao
      index = i
    } else {
      if (maior < pontuacao) {
        maior = pontuacao
        index = i
      }
    }

    let jogador = {
      nome: nome,
      pontos: pontuacao
    }

    jogadores[i] = (jogador)
    NumeroJogador++;
  }

  console.log(`O melhor jogador foi o : ${jogadores[index].nome}, com ${jogadores[index].pontos} pontos.`)
}