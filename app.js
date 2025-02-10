// Importo il framework Express usando CommonJS
const express = require("express");

// Inizializzo Express invocandolo come una funzione e salvo il risultato in una variabile
const app = express();

// Do una porta
const port = 3000;

// Importo l'array dei post
const posts = require("./data/array_posts");

// Importo l'istanza di router
const postsRouter = require("./routers/posts");

// Importo il middleware di gestione errore server
const errorsHandler = require("./middlewares/errorsHandler");

// Importo il middleware di gestione errore 404
const notFound = require("./middlewares/notFound");


// Definisco l'uso di una cartella per i file statici
app.use(express.static("public"));

// Registro il body-parser per "application/json"
app.use(express.json());

// Definisco la prima rotta
app.get("/", (req, res) => {
    // Se l'utente finisce sull'endpoint / gli ritorna un testo con scritto "Server del mio blog"
    res.send("Server del mio blog");
});

// Definisco la rotta /bacheca
app.get("/bacheca", (req, res) => {
    // Ritorno l'array di post in formato Json
    res.json(posts);
});

// Indico l'esistenza di nuove rotte specificando il prefisso e il router
app.use("/posts", postsRouter);

// Utilizzo il middleware di gestione errore server
app.use(errorsHandler);

// utilizzo il middleware di gestione errore 404
app.use(notFound);

// Avvio il server, mettendolo in ascolto sulla porta indicata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});