require('chromedriver');
import chrome from 'selenium-webdriver/chrome';
import { Builder, } from 'selenium-webdriver';

export const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build()

driver
    .manage()
    .window()
    .maximize();