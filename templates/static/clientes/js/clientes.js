function add_carro(){

    container = document.getElementById('form-carro')

    html = " <br> <div class='row'> <div class='col-md'> <input type='text' placeholder='carro' class='form-control' name='carro'> </div> <div class='col-md'> <input type='text' placeholder='placa' class='form-control' name='placa'>  </div> <div class='col-md'> <input type='number' placeholder='ano' class='form-control' name='ano'> </div> </div>"

    container.innerHTML += html
}

function exibir_form(tipo){

    add_cliente = document.getElementById('adicionar_cliente')
    add_cliente = document.getElementById('atualizar_cliente')

    if(tipo == "1"){
        atualizar_cliente.style.display = "none"
        adicionar_cliente.style.display = "block"

    }else if (tipo == "2"){
        atualizar_cliente.style.display = "block"
        adicionar_cliente.style.display = "none"
    }

}

function dados_cliente(){
    cliente = document.getElementById('cliente_select') 
    csrf_token = document.querySelector('[name=csrfmiddlewaretoken]').value
    id_cliente = cliente.value
    data = new FormData()
    data.append('id_cliente', id_cliente)

    fetch("/clientes/atualiza_cliente/",{
        method:"POST",
        headers:{
            'X-CSRFToken': csrf_token,
        },
        body: data
    }).then(function(result){
        return result.json()
    }).then(function(data){

        document.getElementById('form-atualizar-cliente').style.display = 'block'

        nome = document.getElementById('nome')
        nome.value = data['nome']

        sobrenome = document.getElementById('sobrenome')
        sobrenome.value = data['sobrenome']

        cpf = document.getElementById('cpf')
        cpf.value = data['cpf']

        email = document.getElementById('email')
        email.value = data['email']

    })
}