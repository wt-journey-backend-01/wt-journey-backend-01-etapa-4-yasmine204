const repository = require('../repositories/usuariosRepository');
const { usuariosSchema } = require('../utils/usuariosValidation');
const ApiError = require('../utils/ApiError');
const formatZodError = require('../utils/formatZodError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { email } = require('zod');

const login = async (req, res, next) => {
    try {
        const data = usuariosSchema
            .pick({ email: true, senha: true })
            .parse(req.body);
        
        const usuario = await repository.findByEmail(data.email);

        if(!usuario) {
            return next(new ApiError('Usuário não encontrado.', 404));
        }
        
        const isValidSenha = await bcrypt.compare(data.senha, usuario.senha);
        
        if(!isValidSenha) {
            return next(new ApiError('Senha inválida.', 401));
        }

        const token = jwt.sign({ 
            id: usuario.id, 
            nome: usuario.nome, 
            email: usuario.email 
        }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1d' });

        res.status(200).json({
            message: 'Login efetuado com sucesso!',
            token
        });
    } 
    catch (error) {
        if(formatZodError(error, next)) return;

        return next(new ApiError(error.message));
    }
}

const registro = async (req, res, next) => {
    try {
        console.log(req.body)
        const data = usuariosSchema.parse(req.body);
        
        const usuario = await repository.findByEmail(data.email);
        
        if(usuario) {
            return next(new ApiError('Usuário já existente.', 400));
        }   

        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
        const hashSenha = await bcrypt.hash(data.senha, salt);

        const newUsuario = await repository.create({
            nome: data.nome,
            email: data.email,
            senha: hashSenha
        });

        res.status(201).json({
            message: 'Usuário criado com sucesso!',
            usuario: newUsuario
        });
    } 
    catch (error) {
        if(formatZodError(error, next)) return;

        return next(new ApiError(error.message));   
    }
}

const logout = async (req, res, next) => {
    try {
        res.status(200).json({
            message:'Logout realizado com sucesso!'
        });    
    } 
    catch (error) {
        return next(new ApiError('Erro ao realizar logout.', 400));
    }
}

module.exports = {
    login,
    registro,
    logout
}