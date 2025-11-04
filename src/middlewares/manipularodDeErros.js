import mongoose from "mongoose"

        // verifica quando houver dados 
function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estao incorretos"})

        // verifica quando houver erro de validaçao
    } else if (erro instanceof mongoose.Error.ValidationError) {
        // para exibir qual motivo da mensagem de erro 
        const mensagensErro = Object.values(erro.errors)
        .map(erro => erro.message)
        .join("; ")

        res.status(400).send({message: `Os seguintes erros foram encontrados ${mensagensErro}`})
    } else {
        res.status(500).send({message: "Erro interno do servidor"})
    }
}


export default manipuladorDeErros