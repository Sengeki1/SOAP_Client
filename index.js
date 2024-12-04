const soap = require("soap")

const urlServico = "http://localhost:8080/Servico?wsdl"

const options = {
    timeout: 60000,  // Set the timeout to 60 seconds
    wsdl_headers: { 'Connection': 'keep-alive' },  // Ensure persistent connection
};

const argsAdicionarNavio = {
    id_navio: 0,
    nome: "Mindless",   
    carga_bruta: 55,
    calado: 55.2
}

const agrsAdicionarPassageiro = {
    id_viagem: 0,
    nome: "Jeffrey Bezos",
    idade: 55
}

const agrsAdicionarViagem = {
    id_viagem: 0,
    id_navio: 0,
    porto_partida: "Mindelo",
    porto_destino: "Porto",
    hora_partida: 17,
    hora_chegada: 20
}


soap.createClient(urlServico, options, (erro, cliente) => {
    if (erro) {
        console.error("Erro ao criar objecto cliente", erro);
        return
    }

    cliente.adicionarNavio(argsAdicionarNavio, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao chamar o serviço: ", erro)
        } else {
            console.log("Resposta do Serviço: ", JSON.stringify(resultado))
        }
    })

    cliente.adicionarViagem(agrsAdicionarViagem, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao chamar o serviço: ", erro)
        } else {
            console.log("Resposta do Serviço: ", JSON.stringify(resultado))
        }
    })

    cliente.adicionarPassageiro(agrsAdicionarPassageiro, (erro, resultado) => {
        if (erro) {
            console.log("Erro ao chamar o serviço: ", erro)
        } else {
            console.log("Resposta do Serviço: ", JSON.stringify(resultado))
        }
    })
})