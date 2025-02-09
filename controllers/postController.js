// Importo l'array dei post
const { json } = require("express");
const posts = require("../data/array_posts");

// Aggiungo la funzione index
function index(req, res) {
    // res.send("Lista dei post");
    res.json(posts);
};

// Aggiungo la funzione show
function show(req, res) {
    // res.send("Dettagli del post " + req.params.id);

    // Recupero l'id dall'URL come parametro dinamico e lo salvo in una costante interna alla funzione che andrà a salvare, forzandola a diventare un numero, quello che l'utente ha scritto dall'altra parte come parametro dinamico
    const id = parseInt(req.params.id);

    // Uso il metodo find per trovare nell'array di oggetti "posts" esattamente quell'elemento dell'array che come proprietà id dell'oggetto corrisponde con l'id che ha passato l'utente e lo ritorno sotto forma di json
    const post = posts.find(post => post.id === id);

    // Eseguo il controllo se per caso l'utente scrive un id che non corrisponde ad alcun elemento
    if(!post){
        // Se l'id passato non trova nessun elemento corrispondente, restituisco un json con informazioni sull'errore, incluso lo status
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        });
    };

    // Restituisco l'elemento sotto forma di JSON
    res.json(post);
};

// Aggiungo la funzione store
function store(req, res) {
    // Creo un nuovo id incrementando l'ultimo id presente
    const newId = posts[posts.length - 1].id + 1;

    // Creo un nuovo oggetto post con i dati ricevuti
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    // Aggiungo il nuovo post all'array posts
    posts.push(newPost);

    // Controllo l'effettivo aggiornamento dell'array
    console.log(posts);

    // Restituisco lo status corretto e l'elemento post appena creato in formato json
    res.status(201);
    res.json(newPost);

    // console.log(req.body);

    // res.send("Creazione nuovo post");
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
    // res.send("Cancellazione del post " + req.params.id);

    // Recupero l'id dall'URL come parametro dinamico e lo salvo in una costante interna alla funzione che andrà a salvare, forzandola a diventare un numero, quello che l'utente ha scritto dall'altra parte come parametro dinamico
    const id = parseInt(req.params.id);

    // Uso il metodo find per trovare nell'array di oggetti "posts" esattamente quell'elemento dell'array che come proprietà id dell'oggetto corrisponde con l'id che ha passato l'utente e lo ritorno sotto forma di json
    const post = posts.find(post => post.id === id);

    // Eseguo il controllo se per caso l'utente scrive un id che non corrisponde ad alcun elemento
    if(!post){
        // Se l'id passato non trova nessun elemento corrispondente, restituisco un json con informazioni sull'errore, incluso lo status
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        });
    };

    // Rimuovo il singolo elemento dall'array
    posts.splice(posts.indexOf(post), 1);

    // Per controllare che l'elemento corretto sia stato correttamente cancellato dall'array, stampo nel terminale la lista aggiornata, prima di restituire lo status
    console.log(posts);

    // Restituisco una risposta con uno status 204, ma senza body (ossia senza contenuto)
    res.sendStatus(204);
};

// Esporto tutte le funzioni
module.exports = { index, show, store, update, modify, destroy };