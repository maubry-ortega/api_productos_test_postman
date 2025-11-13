import app from './app.js';

/**
 * configurar el Puero usando el valor que tenga y sino
 * coloca el valor de 3000
 * */
const PORT = process.env.PORT || 3000
//poner al servidor a escuchar en el puerto
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))