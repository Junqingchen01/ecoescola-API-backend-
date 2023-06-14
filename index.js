require('dotenv').config(); // read environment variables from .env file

const express = require('express');
const cors = require('cors'); // middleware to enable CORS (Cross-Origin Resource Sharing)
const app = express();
const port = process.env.PORT ; // use environment variables
const host = process.env.HOST ;

app.use(cors()); //enable ALL CORS requests (client requests from other domain)
app.use(express.json()); //enable parsing JSON body data
// root route -- /api/
app.get('/', function (req, res) {
res.status(200).json({ message: 'home -- Ecoescola api' });
});

//atividade
app.use('/atividades', require('./routes/atividades.routes.js'))

//utilizador
app.use('/utilizadors', require('./routes/utilizadors.routes.js'))

//reunioes
app.use('/reunioes', require('./routes/reunioes.routes.js'))

//relatorio
app.use('/relatorio', require('./routes/relatorios.routes.js'))

//atas
app.use('/atas',require('./routes/atas.routes.js'))

// handle invalid routes
app.get('*', function (req, res) {
res.status(404).json({ message: 'WHAT??? no ecoescola ??' });
})
app.listen(port, host, () => console.log(`App listening at http://${host}:${port}/`));