const fs = require('fs');
const https = require('https');
const puppeteer = require('puppeteer');
const unzipper = require('unzipper') 
const iconv = require('iconv-lite');
const csv=require('csvtojson');

    
    const urlRemote = 'https://roszdravnadzor.gov.ru/opendata/7710537160-medproducts'
    const fileout = 'data.json'

    async function downloadWithLinks(url, file) {
      const browser = await puppeteer.launch({
          headless: true
      });
      const page = await browser.newPage();
      await page.goto(
          url, 
          { waitUntil: 'networkidle2' }
      );
      
      const aUrl = await page.$eval('.download-link', a => a.href);
      
      https.get(aUrl, res => {
          const stream = fs.createWriteStream(file);
                   
          res.pipe(unzipper.ParseOne())
            .pipe(iconv.decodeStream('win1251'))
            .pipe(iconv.encodeStream('utf8'))
            .pipe(csv({
                delimiter:";",
              }))
            .pipe(stream)
            .on('finish', () => {
                stream.close()
                console.log('All data is downloaded and encoded')
            })
      })
      browser.close()
  }  

  downloadWithLinks(urlRemote, fileout)