    const fs = require('fs');
    const https = require('https');
    const puppeteer = require('puppeteer');
    
    const urlRemote = 'https://roszdravnadzor.gov.ru/opendata/7710537160-medproducts'
    
    async function downloadWithLinks(url) {
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
            const stream = fs.createWriteStream('data.zip');
            res.pipe(stream);
            stream.on('finish', () => {
                stream.close();
            })
        })
        browser.close()
    }  

    downloadWithLinks(urlRemote)