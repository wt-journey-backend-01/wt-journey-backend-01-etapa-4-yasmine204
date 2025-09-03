const express = require('express');
const casosRouter = require('./routes/casosRoutes');
const agentesRouter = require('./routes/agentesRoutes');
const authRouter = require('./routes/authRoutes');
const usuariosRouter = require('./routes/usuariosRoutes')
const errorHandler = require('./utils/errorHandler')
const setupSwagger = require('./docs/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/casos', casosRouter);
app.use('/agentes', agentesRouter);
app.use('/auth', authRouter);
app.use('/users', usuariosRouter);

app.use(errorHandler);

setupSwagger(app);

app.listen(PORT, () => {
    console.log(`Servidor do Departamento de Polícia rodando em localhost:${PORT}`);
});