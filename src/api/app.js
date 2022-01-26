const express = require('express');
const PORT = process.env.PORT || 3001;
const controller = require('../database/controllers/candidates');

const app = express();

app.use(express.json());

app.post('/', controller.saveApprovedCandidates);

app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));
