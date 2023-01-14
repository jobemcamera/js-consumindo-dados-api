// Site: https://viacep.com.br/
// método fetch. 
// O corpo da resposta de uma requisição chega em formato de bytes. 
// Desta forma o .json() transforma o corpo e retorna um json formatado. 
// O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe 
// 000000000000000000000que a de um objeto JS.
// try / catch para tratar o erro da promise

async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
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
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))