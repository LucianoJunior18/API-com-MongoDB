import { autor } from "../models/Author.js";
import livro from "../models/Livro.js";

class AutorController {

    

  static async listarAutores (req, res) {
    try {
      const listarAutores = await autor.find({});
      res.status(200).json(listarAutores);
    }catch(erro) {
      res.status(500).json({message: `${erro.menssage} - Falha na requisição`});
    }
  }

  static async listarAutorPorId (req, res, next) {
    try {
      const id = req.params.id;
      const AutorEncontrado = await autor.findById(id);

      if ( AutorEncontrado !== null) {
        res.status(200).send(AutorEncontrado);
      } else {
        res.status(404).send({message:` - Id do autor não localizado`});
      }

    }catch(erro) {
      // tratando erro com if else
      next(erro)

    }
  }



  static async cadastraAutor (req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ menssage: "Criado com sucesso", livro: novoAutor });
    } catch (erro) {
      next(erro)
    }
  }

  static async atualizarAutor (req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor atualizado"});
    }catch(erro) {
      next(erro)
    }
  }

  static async deletarAutor (req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor Deletado com sucesso"});
    }catch(erro) {
      next(erro)
    }
  }

};

export default AutorController;
