import livro from "../models/Livro.js"
import { autor } from "../models/Author.js";

class LivroController {

    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch(erro) {
            res.status(500).json({message: `${erro.menssage} - Falha na requisição`})
        }
    }

    static async listarLivroPorId (req, res, next) {
        try {
            const id = req.params.id;
            const LivroEncontrado = await livro.findById(id);
            res.status(200).json(LivroEncontrado);
        }catch(erro) {
            next(erro)
        }
    }



    static async cadastraLivro (req, res, next) {
        try {
            const novoLivro = await livro.create(req.body)
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ menssage: "Criado com sucesso", livro: livroCriado })
        } catch (erro) {
            next(erro)
        }
    }

    static async atualizarLivro (req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: `Livro atualizado`});
        }catch(erro) {
            next(erro)
        }
    }

    static async deletarLivro (req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: `Livro Deletado com sucesso`});
        }catch(erro) {
            next(erro)
        }
    };

    static async listarLivrosPorEditora (req, res, next)  {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora})
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            next(erro)
        }
    }

};

export default LivroController;
