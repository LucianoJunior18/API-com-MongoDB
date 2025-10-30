import express from "express"
import LivroController from "../controllers/livroControlle.js"

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros)