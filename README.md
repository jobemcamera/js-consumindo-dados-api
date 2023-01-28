# Curso Consumindo dados de uma API - Alura

O projeto consiste em consumir dados de uma API, passando pelas etapas de requisição e tratamento das informações.

A API utilizada neste projeto é a API do [ViaCEP](https://viacep.com.br/).

![image](https://user-images.githubusercontent.com/109925623/215288292-8da06efb-53e7-4e40-94ab-957d4ae9a0bd.png)

## O que eu aprendi

O principal conhecimento adquirido neste projeto, se resume na função assíncrona que irá requisitar o consumo de dados da API. 

```js
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
```

Com a função ```async``` é enviada uma requisição para a API e é retornado uma ```promisse```. Essa promessa retorna uma resposta que é tratada com o ```try/catch```.
Caso o valor buscado (CEP) não exista, é retornado a mensagem "CEP não existente!" pela expressão ```throw```.

Os dados que a API retorna é um objeto ```JSON```, conforme mostrado abaixo:

```
Object
bairro: "Sé"
cep: "01001-000"
complemento: "lado ímpar"
ddd: "11"
gia: "1004"
ibge: "3550308"
localidade: "São Paulo"
logradouro: "Praça da Sé"
siafi: "7107"
uf: "SP"
[[Prototype]]: Object
```
