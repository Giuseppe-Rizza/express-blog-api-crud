// Importo il framework Express usando CommonJS
const express = require("express");

// Creo una variabile router
const router = express.Router();

// index
router.get("/", function(req, res) {
    res.send("Lista delle pizze");
    });

// show
router.get("/:id", function(req, res) {
    res.send("Dettagli della pizza " + req.params.id);
});

// store
router.post("/", function(req, res) {
    res.send("Creazione nuovo post");
});

// update
router.put("/:id", function(req, res) {
    res.send("Modifica integrale del post " + req.params.id);
});

// modify
router.patch("/:id", function(req, res) {
    res.send("Modifica parziale del post " + req.params.id);
});

// destroy
router.delete("/:id", function(req, res) {
    res.send("Cancellazione del post " + req.params.id);
});

// Esporto l'istanza di router
module.exports = router;