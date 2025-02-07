// Importo l'array dei post
const posts = require("./data/array_posts");

// Aggiungo la funzione index
function index(req, res) {
    res.send("Lista delle pizze");
};

// Aggiungo la funzione show
function show(req, res) {
    res.send("Dettagli della pizza " + req.params.id);
};

// Aggiungo la funzione store
function store(req, res) {
    res.send("Creazione nuovo post");
};

// Aggiungo la funzione update
function update(req, res) {
    res.send("Modifica integrale del post " + req.params.id);
};

// Aggiungo la funzione modify
function modify(req, res) {
    res.send("Modifica parziale del post " + req.params.id);
};

// Aggiungo la funzione destroy
function destroy(req, res) {
    res.send("Cancellazione del post " + req.params.id);
};

// Esporto tutte le funzioni
module.exports = { index, show, store, update, modify, destroy };