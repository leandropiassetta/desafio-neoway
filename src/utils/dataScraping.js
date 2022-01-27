const puppeteer = require('puppeteer');

const scrapingDataCandidates = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  let num = 1;
  await page.goto(`https://sample-university-site.herokuapp.com/approvals/${num}`);
  console.log(num)
  const cpfList = await page.evaluate(() => {
    
    const nodeList = document.querySelectorAll('li');
    const liArray= [ ...nodeList ];
console.log('oi')
console.log(num)

    while(liArray) {
      console.log(num)
      num++
    }

    // for( i = 0; i <= 3000; i += 1 ) {
    //   num++
    // }

    const ilList = liArray.map(li => ({
      cpf: li.innerText
    }));

    return ilList;
  });

  return cpfList;
  // await browser.close();
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

  return nameCandidate;
}

module.exports = {
  scrapingDataCandidates,
  scrapingDataNameAndScore,
}
