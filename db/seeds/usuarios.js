const bcrypt = require("bcryptjs");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('usuarios').del();

  const salt = parseInt(process.env.SALT_ROUNDS);

  const senhaHash1 = await bcrypt.hash('SenhaSegura@123', salt);
  const senhaHash2 = await bcrypt.hash('OutraSenha#456', salt);
   
  await knex("usuarios").insert([
    {
      nome: "Administrador",
      email: "admin@exemplo.com",
      senha: senhaHash1,
    },
    {
      nome: "Usuário Padrão",
      email: "user@exemplo.com",
      senha: senhaHash2,
    },
  ]);
};
