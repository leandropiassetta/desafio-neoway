const { Candidates } = require('../models');
const { scrapingDataCandidates } = require('../../utils/dataScraping');

const saveApprovedCandidates = async () => {
  const candidatesCPF=  await scrapingDataCandidates();

  const saveCandidates = candidatesCPF.map(async ({ cpf }) => {
    const candidate = await Candidates.create({ cpf });

    return candidate.cpf
  });

  
  return Promise.all(saveCandidates)
} 

module.exports = {
  saveApprovedCandidates
}