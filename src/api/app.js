const express = require('express');
const PORT = process.env.PORT || 3001;
process.setMaxListeners(0);

const app = express();

app.use(express.json());

const routesCandidates = require('./routes')

app.use('/', routesCandidates);

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));
