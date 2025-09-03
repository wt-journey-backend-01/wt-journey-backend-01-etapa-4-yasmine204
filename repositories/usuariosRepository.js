const db = require('../db/db');
const ApiError = require('../utils/ApiError');

async function findByEmail(email) {
    try {
        return await db('usuarios').where({ email }).first();    
    } 
    catch (error) {
        throw new ApiError('Erro ao buscar usuário pelo email.', 500);
    }
}

async function findById(id) {
    try {
        return await db('usuarios').where({ id }).first();    
    } 
    catch (error) {
        throw new ApiError('Erro ao buscar usuário pelo id.', 500);
    }
}

async function create(data) {
    try {
        const [usuario] = await db('usuarios').insert(data).returning('*');    
        return usuario;
    } 
    catch (error) {
        throw new ApiError('Erro ao criar usuário.', 500);
    }
}

async function remove(id) {
    try {
        const deleted = await db('usuarios').where({ id }).del();
        return deleted > 0;   
    } 
    catch (error) {
        throw new ApiError('Erro ao deletar usuário.', 500);
    }
}

module.exports = {
    findByEmail,
    findById,
    create,
    remove
}