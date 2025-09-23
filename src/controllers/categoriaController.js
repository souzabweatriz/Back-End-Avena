const categoriaModel = require('../models/categoriaModel');

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await categoriaModel.getAllCategories();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
}

const getCategoriaById = async (req, res) => {
    try {
        const categoria = await categoriaModel.getCategoriesById(req.params.id);
        res.json(categoria);
    } catch (error) {
        
    }
}

module.exports = { getAllCategorias, getCategoriaById };