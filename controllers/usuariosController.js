const repository = require('../repositories/usuariosRepository');
const ApiError = require('../utils/ApiError');

const getUsuario = async (req, res, next) => {
    try {
        const usuario = req.user;
        
        if(!usuario) {
            return next(new ApiError('Usuário não encontrado', 404));
        }

        res.status(200).json(usuario);
    } 
    catch (error) {
        return next(new ApiError('Erro ao buscar usuário.', 400));
    }   
}

const deleteUsuario = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const deleted = await repository.remove(id);

        if(!deleted) {
            return next(new ApiError('Usuário não encontrado.', 404));
        }

        res.status(204).send();
    } 
    catch (error) {
        return next(new ApiError('Erro ao deletar usuário.', 400));
    }
}

module.exports = {
    getUsuario,
    deleteUsuario
}