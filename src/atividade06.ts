import leia from 'readline-sync'

export default function atividade06() {

    var Produtos: any[] = [];

    do {
        const opcao = leia.keyInSelect([
            'Cadastrar Produto',
            'Visualizar Produtos'
        ], 'SELECIONE O QUE DESEJA FAZER: ');
        var indice = opcao

        if (opcao === 0) {
            var nomeProduto = leia.question("Digite o nome do produto: ")
            var precoProduto = leia.question("Digite o preco do produto: ")

            let produto = {
                nome: nomeProduto,
                preco: precoProduto
            }
            Produtos.push(produto)
        }
        if (opcao === 1) {
            if (Produtos.length > 0) {
                console.log("Produtos cadastrados: \n")
                for (var i = 0; i < Produtos.length; i++) {
                    console.log(`Produto: ${Produtos[i].nome}, Preco R$: ${Produtos[i].preco}.`)
                    console.log("- - - - - - - - - - - - - - - ")
                }
            }
        }
    } while (indice !== -1)
}

