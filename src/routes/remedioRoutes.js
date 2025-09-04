const express = require("express");
const router = express.Router();
const remedioController = require("../controllers/remedioController");

router.get("/remedios", remedioController.getAllRemedios);
router.get("/remedios/:id", remedioController.getRemedioById);
router.post("/remedios", remedioController.createRemedio);
router.put("/remedios/:id", remedioController.updateRemedio);
router.delete("/remedios/:id", remedioController.deleteRemedio);

module.exports = router;