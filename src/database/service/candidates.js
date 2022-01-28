const { Candidates } = require('../models');
const { scrapingDataCandidates, scrapingDataNameAndScore } = require('../../utils/dataScraping');
const { removeAccentsAndSpecialCharacters } = require('../../utils/formatDatas')
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

  const saveCandidates = candidatesCPFs.reduce(
    (candidatesFutures, cpf) => {
      return candidatesFutures.then(async candidates => {
        const { name, score } = await scrapingDataNameAndScore(cpf);

        const nameFormatted = removeAccentsAndSpecialCharacters(name).toUpperCase();
        const cpfFormartted = removeAccentsAndSpecialCharacters(cpf);

        const candidateDB = await Candidates.upsert({ cpf: cpfFormartted, name: nameFormatted, score });

        const candidatesDB = [...candidates, candidateDB[0]];

        return candidatesDB;
      })
    }, 
    (async () => [])() // valor inicial do acumulador, que começa com uma promisse e retorna um array vazio
  )

  return saveCandidates;
}

module.exports = {
  saveApprovedCandidates
}