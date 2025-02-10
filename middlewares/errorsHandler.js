// Creo una funzione per intercettare i possibili errori
function errorsHandler(err, req, res, next) {
    res.status(500);
    res.json({
        error: err.message,
    });
};

// Esporto la funzione creata per intercettare i possibili errori
module.exports = errorsHandler;