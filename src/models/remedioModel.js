const pool = require("../config/database");

const getRemedios = async () => {
    const result = await pool.query("SELECT * FROM remedios");
    return result.rows;
};

const getRemedioById = async (id) => {
    const result = await pool.query("SELECT * FROM remedios WHERE id = $1", [id]);
    return result.rows[0];
};

const createRemedio = async (nome_remedio, descricao, beneficios, photo, modo_preparo, contraindicacoes, categoria_id) => {
    const result = await pool.query(
        "INSERT INTO remedios (nome_remedio, descricao, beneficios, photo, modo_preparo, contraindicacoes, categoria_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [nome_remedio, descricao, beneficios, photo, modo_preparo, contraindicacoes, categoria_id]
    );
    return result.rows[0];
};

const updateRemedio = async (id, nome_remedio, descricao, beneficios, photo, modo_preparo, contraindicacoes, categoria_id) => {
    const result = await pool.query(
        "UPDATE remedios SET nome_remedio = $1, descricao = $2, beneficios = $3, photo = $4, modo_preparo = $5, contraindicacoes = $6, categoria_id = $7 WHERE id = $8 RETURNING *",
        [nome_remedio, descricao, beneficios, photo, modo_preparo, contraindicacoes, categoria_id, id]
    );
    return result.rows[0];
};

const deleteRemedio = async (id) => {
    const result = await pool.query("DELETE FROM remedios WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = { getRemedios, getRemedioById, createRemedio, updateRemedio, deleteRemedio};