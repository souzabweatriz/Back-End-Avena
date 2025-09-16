const { getRemediosPorSintoma } = require('../models/recomendacaoModel');

const recomendarRemedio = async (req, res) => {
    try {
        // Agora pega o sintoma da query string
        const sintoma = req.query.comoEsta || '';
        const remedios = await getRemediosPorSintoma(sintoma);

        if (!remedios || remedios.length === 0) {
            return res.status(200).json({ mensagem: 'Nenhum remédio encontrado para esse sintoma.' });
        }

        return res.status(200).json(remedios);
    } catch (error) {
        console.error('Erro ao recomendar remédio:', error);
        return res.status(500).json({ erro: 'Erro no servidor.' });
    }
};

module.exports = { recomendarRemedio };
