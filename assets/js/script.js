// Site: https://viacep.com.br/
// método fetch. 
// O corpo da resposta de uma requisição chega em formato de bytes. 
// Desta forma o .json() transforma o corpo e retorna um json formatado. 
// O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe 
// 000000000000000000000que a de um objeto JS.
// try / catch para tratar o erro da promise

async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""

    var cepTratado = cep.replace('-', '')

    try {
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cepTratado}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) { //retorna TRUE se houver erro
            throw Error('CEP não existente!')
        }

        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        
        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida)

        return consultaCEPConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

// 01001-001
function cepMascara(cep) {
    if (cep.value.length == 5) {
        cep.value = cep.value + '-' 
    }
}