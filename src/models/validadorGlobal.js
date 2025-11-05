// validador global caso uma string seja passada vazia como nacionalidade

import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (valor) => valor.trim() !== "",
    message: ({ path }) => `Campo em branco ${path} foi encontrado`
})