const serviceCandidates = require('../service/candidates')

const saveApprovedCandidates = async (_req, res) => {
  const candidates = await serviceCandidates.saveApprovedCandidates()

  res.status(200).json({ message:'Candidatos salvos com sucesso!!', candidates });
}

const getAllAprovedCandidates = async (req, res) => {

}

const getByIdAprovedCandidates = async (req, res) => {

}

module.exports = {
  saveApprovedCandidates,
  getAllAprovedCandidates,
  getByIdAprovedCandidates
}