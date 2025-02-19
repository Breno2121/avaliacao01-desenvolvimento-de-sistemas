import leia from "readline-sync";

export default function atividade03() {
  for (let i = 0; i < 3; i++) {

    const opcao = leia.keyInSelect([
      'Pedra',
      'Papel',
      'Tesoura'
    ], 'SELECIONE SUA JOGADA: ');

    if (opcao === -1) {
      console.log("Você desistiu do jogo");
      break;
    }

    let opcaoPc = Math.trunc(Math.random() * 3);

    if (opcao === opcaoPc) {
      console.log("Empate! Jogue novamente.");
    } else if (
      (opcao === 0 && opcaoPc === 2) || (opcao === 1 && opcaoPc === 0) || (opcao === 2 && opcaoPc === 1)
    ) {
      console.log("Você ganhou!");
    } else {
      console.log("Eu ganhei!!!");
    }

    console.log(`Sua opção: ${['Pedra', 'Papel', 'Tesoura'][opcao]}`);
    console.log(`Opção do PC: ${['Pedra', 'Papel', 'Tesoura'][opcaoPc]}`);
  }
}
