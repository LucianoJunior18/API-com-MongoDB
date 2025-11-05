function manipulador404(req, res, next) {
    res.status(404).send({mensagem: "Pagina nao encontrada"})
}

export default manipulador404