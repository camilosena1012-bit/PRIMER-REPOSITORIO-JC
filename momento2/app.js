// app.js

import express from 'express';
const app = express();



const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
res.send('API Aventuras San Gil funcionando');
});





app.listen(3001, () => {
console.log(`Servidor escuchando en http://localhost:3001`);
});