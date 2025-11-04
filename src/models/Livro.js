import mongoose from "mongoose";
import { autorSchema } from "./Author.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { 
        type: String, 
        required: [true, "O titulo do livro e obrigatorio"] 
    },
    editora: { 
        type: String ,
        required : [true, "A editora do livro e obrigatorio"]
    } ,
    preco: {type: Number},
    paginas: {type: Number},
    autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "autores",
            required: [true, "O autor e obrigatorio"]

    }

}, { versionKey: false});

const livro = mongoose.model("livros", livroSchema)

export default livro;