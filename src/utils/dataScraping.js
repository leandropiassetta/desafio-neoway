const puppeteer = require('puppeteer');
const scrapingDataCandidates = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://sample-university-site.herokuapp.com/');

  const cpfList = await page.evaluate(() => {

    const nodeList = document.querySelectorAll('li');
    const liArray= [ ...nodeList ];

    const ilList = liArray.map(li => ({
      cpf: li.innerText
    }));

    return ilList;
  });

  return cpfList;
  // await browser.close();
};

const scrapingDaTaName= async (cpf) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://sample-university-site.herokuapp.com/candidate/${cpf}`);

  const nameCandidate = await page.evaluate(() => {

    const nodeDiv = document.querySelectorAll('div');

    const name = nodeDiv[0].innerText.split(':')[1];

    return name;
  });

  return nameCandidate;
}

const scrapingDaTaScore =  async (cpf) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://sample-university-site.herokuapp.com/candidate/${cpf}`);


  const scoreCandidate = await page.evaluate(() => {

    const nodeDiv = document.querySelectorAll('div');

    const score = nodeDiv[1].innerText.split(':')[1];

    return score;
  });

  return scoreCandidate;
}


module.exports = {
  scrapingDataCandidates,
  scrapingDaTaName,
  scrapingDaTaScore
}