const { z } = require('zod');

const usuariosSchema = z.object({
    nome: z.string({ required_error: "O campo 'nome' é obrigatório." }).min(1, "O campo 'nome' não pode estar vazio."),

    email: z.string({ required_error: "O campo 'email' é obrigatório." }).email("Email inválido."),

    senha: z.string({ required_error: "O campo 'senha' é obrigatório." })
        .min(8, "A senha deve ter no mínimo 8 caracteres.")
        .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
        .regex(/\d/, "A senha deve conter pelo menos um número.")
        .regex(/[@$!%*?&]/, "A senha deve conter pelo menos um caractere especial.")
}).strict();

module.exports = { usuariosSchema };