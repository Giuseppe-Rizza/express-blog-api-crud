// Importo il framework Express usando CommonJS
const express = require("express");

// Creo una variabile router
const router = express.Router();

// Importo le funzioni
const postController = require("../controllers/postController")

// index
router.get("/", postController.index);

// show
router.get("/:id", postController.show);

// store
router.post("/", postController.store);

// update
router.put("/:id", postController.update);

// modify
router.patch("/:id", postController.modify);

// destroy
router.delete("/:id", postController.destroy);

// Esporto l'istanza di router
module.exports = router;