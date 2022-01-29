const puppeteer = require('puppeteer');

const scrapingDataCandidatesPerPage = async(pageNumber) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(`https://sample-university-site.herokuapp.com/approvals/${pageNumber}`);

  const cpfList = await page.evaluate(() => {
    
  const nodeList = document.querySelectorAll('li');
  const liArray= [ ...nodeList ];
  
  const ilList = liArray.map(li => ({
    cpf: li.innerText
  }));

    return ilList;
  });
  
  await browser.close();
  
  return cpfList;

}

const scrapingDataCandidates = async () => {

  let cpfList = [];
  let allCPFList = [];
  let number = 1;

  do {

    cpfList = await scrapingDataCandidatesPerPage(number);
    console.log(cpfList)
    allCPFList.push(...cpfList);
    number++;

  } while(cpfList.length > 0);

  return allCPFList;
};

const scrapingDataNameAndScore= async (cpf) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://sample-university-site.herokuapp.com/candidate/${cpf}`);

  const nameCandidate = await page.evaluate(() => {

    const nodeDiv = document.querySelectorAll('div');

    const name = nodeDiv[0].innerText.split(':')[1].trim();
    const score = nodeDiv[1].innerText.split(':')[1].trim();

    return  { name, score };
  });
  await browser.close();

  return nameCandidate;
}

module.exports = {
  scrapingDataNameAndScore,
  scrapingDataCandidates
}
