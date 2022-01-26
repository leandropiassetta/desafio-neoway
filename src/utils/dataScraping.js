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

const scrapingNameAndScorePerCPF = async (cpf) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://sample-university-site.herokuapp.com/candidates/${cpf}`);


}


module.exports = {
  scrapingDataCandidates
}