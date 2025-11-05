import mongoose from "mongoose";


const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { 
        type: String, 
        required: [true, "O titulo do livro e obrigatorio"] 
    },
    editora: { 
        type: String ,
        required : [true, "A editora do livro e obrigatorio"],

    } ,
    preco: {type: Number},
    paginas: {
        type: Number,
        // minimo e maximo de paginas permitido
        validate: {
            validator: (valor) => {
                return valor >= 10 && valor <= 5000
            },
            message: "O numero de paginas deve estar entre 10 e 5000. valor inserido {VALUE}"
        }
    },
    autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "autores",
            required: [true, "O autor e obrigatorio"]

    }

}, { versionKey: false});

const livro = mongoose.model("livros", livroSchema)

export default livro;