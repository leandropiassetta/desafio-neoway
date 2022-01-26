const serviceCandidates = require('../service/candidates')

const saveApprovedCandidates = async (_req, res) => {
  const candidates = await serviceCandidates.saveApprovedCandidates()

  res.status(200).json({ message:'Candidatos salvo com sucesso!!', candidates });
}

module.exports = {
  saveApprovedCandidates
}