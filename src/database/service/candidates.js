const { Candidates } = require('../models');
const { scrapingDataCandidates, scrapingDataNameAndScore } = require('../../utils/dataScraping');
const { cpf } = require('cpf-cnpj-validator');

const getValidCPFs = async () => {
  const candidatesCPFs =  await scrapingDataCandidates();

  const cpfValids = [];

    candidatesCPFs.forEach(num => {

    const isValid = cpf.isValid(num.cpf);

    if(isValid) {
      cpfValids.push(num.cpf);
    }
  });

  return cpfValids;
}
const saveApprovedCandidates = async () => {
  const candidatesCPFs = await getValidCPFs();

    const saveCandidates = candidatesCPFs.map(async(cpf)  => {

      const { name, score } = await scrapingDataNameAndScore(cpf);

      const candidate = await Candidates.upsert({ cpf, name, score });
  
      return candidate[0];
    });
    
    return Promise.all(saveCandidates);
} 

module.exports = {
  saveApprovedCandidates
}