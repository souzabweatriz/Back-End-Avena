const remedioModel = require('../models/remedioModel');

const getAllRemedios = async (req, res) => {
    try {
        const remedios = await remedioModel.getRemedios();
        res.json(remedios);
    } catch (error) {
        res.status(404).json({ error: 'Erro ao buscar remédios' }); 
    }
};

const getRemedioById = async (req, res) => {
    try {
        const remedio = await remedioModel.getRemedioById(req.params.id);
        if (!remedio) {
            return res.status(404).json({ error: 'Remédio não encontrado' });
        }
        res.json(remedio);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar remédio' });
    }
};

const createRemedio = async (req, res) => {
    try {
        const { nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id } = req.body;
        const newRemedio = await remedioModel.createRemedio(nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id);
        res.status(201).json(newRemedio);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar remédio' });
    }
};

const updateRemedio = async (req, res) => {
    try {
        const { nome_remedio, descricao, beneficios, photo, modo_preparo, contraindicacoes, categoria_id } = req.body;
        const updatedRemedio = await remedioModel.updateRemedio(req.params.id, nome_remedio, descricao, beneficios, photo, modo_preparo, contraindicacoes, categoria_id);
        if (!updatedRemedio) {
            return res.status(404).json({ error: 'Remédio não encontrado' });
        }
        res.json(updatedRemedio);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar remédio' });
    } 
};

const deleteRemedio = async (req, res) => {
    try {
        const message = await remedioModel.deleteRemedio(req.params.id);
        if (!message) {
            return res.status(404).json({ error: 'Remédio não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar remédio' });
    }
};

module.exports = { getAllRemedios, getRemedioById, createRemedio, updateRemedio, deleteRemedio };