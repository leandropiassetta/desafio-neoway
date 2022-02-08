const router = require('express').Router();
const controllersCandidates = require('../database/controllers/candidates');

router.post('/approvals', controllersCandidates.saveApprovedCandidates);
// router.get('/approvals', controllersCandidates.getAllAprovedCandidates);
// router.get('/approvals/:id', controllersCandidates.getByIdAprovedCandidates);

module.exports = router;
