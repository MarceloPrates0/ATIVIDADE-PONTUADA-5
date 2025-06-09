// SISTEMA DE GESTÃO DE BANCO 

const readlineSync = require('readline-sync')

let prosseguirSistema = readlineSync.question('Deseja prosseguir ao sistema? S/N; ').toUpperCase()

let transferenciasFeitas = []
let totalSaldo = 0



function depositar() {
    let inserirSaldo = readlineSync.questionFloat('Insira o valor que deseja depositar: ')
    transferenciasFeitas.push(inserirSaldo)
    return totalSaldo = transferenciasFeitas.reduce((total, inserirSaldo) => total + inserirSaldo, 0)

}

function tranferir() {
    let transferirSaldo = readlineSync.questionFloat('Insira o valor que deseja transferir: ')
    if (transferirSaldo < totalSaldo){
        totalSaldo -= transferirSaldo
    } else {
        console.log('SALDO INSUFICIENTE.')
    }
}



function solicitarEmprestimo() {
    console.log ('======== Solicitando o Emprestimo ========')

        let valorSolicitado = readlineSync.questionFloat(`Digite o valor que deseja solicitar: `)
        const limiteEmprestimo = 10000; // Definindo o limite máximo do empréstimo
      
        // Verifica se o valor solicitado é maior que o limite
        if (valorSolicitado > limiteEmprestimo) {
          // Se ultrapassar o limite, exibe uma mensagem de aviso
          console.log (`Valor solicitado (${valorSolicitado}) ultrapassa o limite de R$ ${limiteEmprestimo}. Por favor, solicite um valor menor ou igual ao limite.`);
        } else {
          // Se estiver dentro do limite, aprova o empréstimo
          console.log (`Empréstimo de R$ ${valorSolicitado} estará em analise`)
          
          console.log (`Empréstimo de R$ ${valorSolicitado} foi aceito!.`)
          
          totalSaldo += valorSolicitado
        }
      }
      



while (prosseguirSistema == 'S') {
    console.log('===SISTEMA BANCÁRIO===')
    console.log('===SELECIONE===')
    let comandoSistema = readlineSync.questionInt('1 - DEPOSITO\n2 - TRANSFERENCIA\n3 - SALDO\n4 - EMPRESTIMO\n ')
    switch (comandoSistema) {
        case 1:
            depositar()
            break;
        case 2:
            tranferir()
            break;
        case 3:
            console.log('===CONFIRA SEU SALDO===')
            console.log(`R$${totalSaldo}`)
            break;
        case 4:
            solicitarEmprestimo()
            break;
    
        default:
            console.log('OPÇAO INVALIDA.')
            break;
        }
    let continuarSistema = readlineSync.question('Deseja continuar com o sistema? S/N: ').toUpperCase()
    if (continuarSistema == 'N') {
        break
    }
}