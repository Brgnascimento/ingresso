function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (qtd = 0){
        alert('Ops, você não colocou a quantidade!')
    } else {
        if (tipo.value =='pista'){
            comprarPista(qtd)} else {
                if (tipo.value == 'inferior'){
                    comprarInferior(qtd)
                } else {
                    comprarSuperior(qtd)
                }
        }
    }
  
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent)

    if(qtd > qtdPista){
        alert('Não há vagas disponíveis para Pista!')
    } else {
        qtdPista = qtdPista - qtd
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso!')
    } 
}

function comprarInferior(qtd){
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent)

    if(qtd > qtdinferior){
        alert('Não há vagas disponíveis para Cadeira inferior!')
    } else {
        qtdinferior = qtdinferior - qtd
        document.getElementById('qtd-inferior').textContent = qtdinferior
        alert('Compra realizada com sucesso!')
    } 
}

function comprarSuperior(qtd){
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent)

    if(qtd > qtdsuperior){
        alert('Não há vagas disponíveis para Cadeira superior!')
    } else {
        qtdsuperior = qtdsuperior - qtd
        document.getElementById('qtd-superior').textContent = qtdsuperior
        alert('Compra realizada com sucesso!')
    } 
}