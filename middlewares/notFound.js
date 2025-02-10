// Creo una funzione con un messaggio d'errore ed uno status "404 - Not Found" in caso venga chiamata una rotta inesistente
function notFound(req, res, next) {
    res.status(404);
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

// Esporto la funzione con il messaggio d'errore e lo status "404 - Not Found"
module.exports = notFound;