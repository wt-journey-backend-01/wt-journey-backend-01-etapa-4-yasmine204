const express = require('express');
const router = express.Router();
const controller = require('../controllers/agentesController');
const authMiddleware = require('../middlewares/authMiddleware');

/**
 * @swagger
 * tags:
 *      name: Agentes
 *      description: Gerenciamento dos agentes do Departamento de Polícia
 */

/**
 * @swagger
 * /agentes:
 *   get:
 *     summary: Lista todos os agentes
 *     tags: [Agentes]
 *     responses:
 *       200:
 *         description: Lista de agentes
 */
router.get('/', authMiddleware, controller.getAgentes);

/**
 * @swagger
 * /agentes:
 *   post:
 *     summary: Cria um novo agente
 *     tags: [Agentes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, dataDeIncorporacao, cargo]
 *             properties:
 *               nome:
 *                 type: string
 *               dataDeIncorporacao:
 *                 type: string
 *               cargo:
 *                 type: string
 *                 enum: [inspetor, delegado, escrivão, agente] 
 *     responses:
 *       201:
 *         description: Agente criado com sucesso
 */
router.post('/', authMiddleware, controller.createAgente);

/**
 * @swagger
 * /agentes/{id}:
 *   get:
 *     summary: Busca um agente pelo id
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agente encontrado com sucesso
 */
router.get('/:id', authMiddleware, controller.getAgenteById);

/**
 * @swagger
 * /agentes/{id}:
 *   put:
 *     summary: Atualiza completamente um agente
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, dataDeIncorporacao, cargo]
 *             properties:
 *               nome:
 *                 type: string
 *               dataDeIncorporacao:
 *                 type: string
 *               cargo:
 *                 type: string
 *                 enum: [inspetor, delegado, escrivão, agente]
 *     responses:
 *       200:
 *         description: Agente atualizado com sucesso
 */
router.put('/:id', authMiddleware, controller.updateCompletelyAgente);

/**
 * @swagger
 * /agentes/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um agente
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               dataDeIncorporacao:
 *                 type: string
 *               cargo:
 *                 type: string
 *                 enum: [inspetor, delegado, escrivão, agente]
 *     responses:
 *       200:
 *         description: Agente atualizado parcialmente com sucesso
 */
router.patch('/:id', authMiddleware, controller.partiallyUpdateAgente);

/**
 * @swagger
 * /agentes/{id}:
 *   delete:
 *     summary: Remove um agente pelo id
 *     tags: [Agentes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Agente deletado com sucesso
 */
router.delete('/:id', authMiddleware, controller.deleteAgente);

module.exports = router;