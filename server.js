require("dotenv").config();
const express = require("express");
const cors = require("cors");
const remedioRoutes = require('./src/routes/remedioRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', remedioRoutes),
app.use('/api', categoriaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
