const soap = require("soap")

const wslURL = './RegistoAvaliaService.xml' // XML file received from the route bellow
const urlServico = "http://localhost:8080/RegistroAvaliaService?wsdl"

const args = {
    codigoTurma: 1
}

soap.createClient(wslURL, (erro, cliente) => {
    if (erro) {
        console.error("Erro ao criar objecto cliente", erro);
        return
    }

    cliente.setEndpoint(urlServico)

    cliente.consultarAvaliaTurma(args, (erro, resultado) => {
        if (erro) {
            console.log("Error")
        } else {
            console.log("Resposta do Serviço: ", JSON.stringify(resultado, null, 2))
        }
    }) // method from the xml
})