const pool = require('../config/database');

const getAllCategories = async () => {
    const result = await pool.query('SELECT * FROM categorias ORDER BY id');
    return result.rows;
}

const getCategoriesById = async (id) => {
    const result = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]);
    return result.rows[0];
}

module.exports = { getAllCategories, getCategoriesById };