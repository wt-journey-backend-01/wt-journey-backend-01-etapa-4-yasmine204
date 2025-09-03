/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('casos', table => {
            table.increments('id').primary();
            table.string('titulo').notNullable();
            table.text('descricao').notNullable();
            table.enu('status', ['aberto', 'solucionado']).notNullable();
            table.integer('agente_id')
                .unsigned()
                .references('id')
                .inTable('agentes')
                .onDelete('CASCADE')
                .notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('casos');
};
