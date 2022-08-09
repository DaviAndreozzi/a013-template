// const idadeDependente = +prompt(
//     '*Solicitação de dependente *\n Qual a idade do dependente?'
// )

// if aninhados
// if(idadeDependente >= 13){
//     if(idadeDependente <= 17){
//         alert('o dependente já pode ter um cartão de crédito vinculado ao seu')
//     }else {
//         alert('consulte outras possibilidades do labank')
//     }
// }else {
//     alert('consulte outras possibilidades do labank')
// }

// if c/ operador logico

// if(idadeDependente >= 13 && idadeDependente <= 17){
//     alert('O dependente já pode ter um cartão vinculado ao seu')
// }else{
//     alert('Consulte outras possibilidades do labank')
// }

// if ternário
// verificação ? true : false
// alert(
// idadeDependente === 13 ? 'A idade do dependente é 13 e ja pode ter um cartão' : 'Verifique as outras opções disponiveis'
// )

// switch-case

const escolhaDeCartao = +prompt('solicitação de cartão de crédito *\n Digite a opção desejada: \n 1-Facíl \n 2- Black \n 3- Platinum \n 4- MasterGold')

switch(escolhaDeCartao){ 
    case 1:
        alert('cartao Fácil Adquirido')
        break;
        case 2:
            alert('cartao black Adquirido')
            break;
        case 3:
            alert('cartao platinum Adquirido')
            break;
        case 4 :
            alert('cartao MasterGold Adquirido')
            break;
        default:
            alert('escolha uma das opções disponiveis')
}