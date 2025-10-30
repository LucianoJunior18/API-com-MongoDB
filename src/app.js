import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Error de conexão" , erro)
});

conexao.once("open", () => {
    console.log("Conexao com o banco feita com sucesso")
})

const app = express();
routes(app);





//  Deleta
app.delete("/livros/:id", (req, res) => {
    const index = buscarLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livros removido com sucesso");
});

export default app


