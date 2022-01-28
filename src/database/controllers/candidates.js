const serviceCandidates = require('../service/candidates')

const saveApprovedCandidates = async (_req, res) => {
  const candidates = await serviceCandidates.saveApprovedCandidates()

  res.status(201).json({ message:'Candidatos salvos com sucesso!!', candidates });
}

const getAllApprovedCandidates = async (_req, res) => {

  const candidates = await serviceCandidates.getAllApprovedCandidates();

  console.log('oi')

  res.status(200).json(candidates)
}

const getByIdApprovedCandidates = async (req, res) => {

}

module.exports = {
  saveApprovedCandidates,
  getAllApprovedCandidates,
  getByIdApprovedCandidates
}