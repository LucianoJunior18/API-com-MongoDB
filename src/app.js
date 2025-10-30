import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Error de conexão" , erro)
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso")
})

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});


// Ler
app.get("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
res.status(200).json(livros[index])
})

// Cria
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
})

// Atualiza
app.put("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

//  Deleta
app.delete("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livros removido com sucesso");
});

export default app


