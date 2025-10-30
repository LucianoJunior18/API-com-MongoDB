import { autor } from "../models/Author.js"
import livro from "../models/Livro.js";

class AutorController {

    

    static async listarAutores (req, res) {
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores);
        }catch(erro) {
            res.status(500).json({message: `${erro.menssage} - Falha na requisição`})
        }
    }

    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const AutorEncontrado = await autor.findById(id);
            res.status(200).json(AutorEncontrado);
        }catch(erro) {
            res.status(500).json({message: `${erro.menssage} - Falha na requisição do autor`})
        }
    }



    static async cadastraAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ menssage: "Criado com sucesso", livro: novoAutor })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar o autor` })
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Autor atualizado`});
        }catch(erro) {
            res.status(500).json({message: `${erro.menssage} - Falha na atualização do autor`})
        }
    }

    static async deletarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: `Autor Deletado com sucesso`});
        }catch(erro) {
            res.status(500).json({message: `${erro.menssage} - Falha ao deletar autor`})
        }
    }

};

export default AutorController;
