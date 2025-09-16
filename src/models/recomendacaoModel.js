const pool = require('../config/database');

const getRemediosPorSintoma = async (sintoma) => {
    let categoriaId = 1;
    const s = (sintoma || '').toLowerCase();
    
    if (s.includes('má digestão') || s.includes('estômago')) categoriaId = 2;
    else if (s.includes('corpo dói') || s.includes('dores musculares')) categoriaId = 3;
    else if (s.includes('dor de cabeça')) categoriaId = 6;
    else if (s.includes('insônia') || s.includes('relaxar') || s.includes('ansiedade')) categoriaId = 1;
    else if (s.includes('gripe')) categoriaId = 5;
    else if (s.includes('cólicas')) categoriaId = 7;
    else if (s.includes('queimação')) categoriaId = 8;

    const result = await pool.query(
        'SELECT * FROM remedios WHERE categoria_id = $1',
        [categoriaId]
    );
    return result.rows;
};

module.exports = { getRemediosPorSintoma };
