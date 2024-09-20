contarAlugados()

function alterarStatus(id){
    const item = document.getElementById(`game-${id}`)
    const imageDiv = item.querySelector('.dashboard__item__img')
    const button = item.querySelector('.dashboard__item__button')
    const nome = item.querySelector('.dashboard__item__name')
    
    if (button.textContent.trim() === 'Alugar'){
        button.textContent = 'Devolver'
        button.classList.add('dashboard__item__button--return')
        imageDiv.classList.add('dashboard__item__img--rented')
    }
    else{
        let text = `Confirma a devolução do jogo ${nome.textContent} selecionado?`
        if(confirm(text) == true){
            button.textContent = 'Alugar'
            button.classList.remove('dashboard__item__button--return')
            imageDiv.classList.remove('dashboard__item__img--rented')
        }
        else{
            return
        }
    }
    contarAlugados()
}

function contarAlugados(){
    const botoes = document.querySelectorAll('.dashboard__item__button')
    let alugados = 0
    
    botoes.forEach(button => {
        if(button.textContent.trim() === 'Devolver'){
            alugados++
        }
    })

    let palavraAlugados = alugados > 1 ? 'jogos alugados' : 'jogo alugado'
    let numAlugados = alugados == 0 ? 'não temos nenhum' : `temos ${alugados}`
    console.log(`Atualmente ${numAlugados} ${palavraAlugados}`)
}