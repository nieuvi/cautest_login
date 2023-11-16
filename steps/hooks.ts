import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium, firefox, Page, webkit } from 'playwright';
import * as dotenv from 'dotenv'

let page: Page;
let browser: Browser;

dotenv.config({
    override: true,
    path: `./helper/env/.env.browser`
})

setDefaultTimeout(60000*2);

Before(async () => {
    const browserType = process.env.BROWSER;
    switch (browserType) {
        case 'chromium':
            browser = await chromium.launch({ headless: false });
        break;
        case 'webkit':
            browser = await webkit.launch({ headless: false });
        break;
        case 'firefox':
            browser = await firefox.launch({ headless: false });
        break;
        default: 
            console.log ('No browser is required');
    }
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto("https://qa.givenow.com.au/login");
        console.log(`captured site title as ${await page.title()}`);
        console.log("run on " + browserType)
        return page;
});

After(async () => {
    await browser.close();
});

export {page, browser };