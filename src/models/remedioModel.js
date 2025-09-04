const pool = require("../config/database");

const getRemedios = async () => {
    const result = await pool.query("SELECT * FROM remedios");
    return result.rows;
};

const getRemedioById = async (id) => {
    const result = await pool.query("SELECT * FROM remedios WHERE id = $1", [id]);
    return result.rows[0];
};

const createRemedio = async (nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id) => {
    const result = await pool.query(
        "INSERT INTO remedios (nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id]
    );
    return result.rows[0];
};

const updateRemedio = async (id, nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id) => {
    const result = await pool.query(
        "UPDATE remedios SET nome_remedio = $1, efeito_remedio = $2, photo = $3, modo_preparo = $4, contraindicacoes = $5, categoria_id = $6 WHERE id = $7 RETURNING *",
        [nome_remedio, efeito_remedio, photo, modo_preparo, contraindicacoes, categoria_id, id]
    );
    return result.rows[0];
};

const deleteRemedio = async (id) => {
    const result = await pool.query("DELETE FROM remedios WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = { getRemedios, getRemedioById, createRemedio, updateRemedio, deleteRemedio};