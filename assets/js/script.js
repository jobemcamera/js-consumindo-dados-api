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
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        console.log(erro)
    }
}

// array com vários CEP's
let ceps = ['01001000', '01001001']
// array com as repostas de cada CEP procurado pela funcao buscaEndereco
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all faz várias requisições ao mesmo tempo
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
