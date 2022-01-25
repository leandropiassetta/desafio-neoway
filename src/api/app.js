const express = require('express');
const path = require('path').resolve('./');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://sample-university-site.herokuapp.com/');

  await browser.close();
})();


app.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));
