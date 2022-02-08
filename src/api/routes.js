const router = require('express').Router();
const controllersCandidates = require('../database/controllers/candidates');

router.post('/approvals', controllersCandidates.saveApprovedCandidates);
// router.get('/approvals', controllersCandidates.getAllApprovedCandidates);
// router.get('/approvals/:id', controllersCandidates.getByIdApprovedCandidates);

module.exports = router;