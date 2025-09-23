const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriaController");

router.get("/categorias", categoriaController.getAllCategorias);
router.get("/categorias/:id", categoriaController.getCategoriaById);

module.exports = router;