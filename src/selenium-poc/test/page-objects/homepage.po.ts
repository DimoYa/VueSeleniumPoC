import { driver } from "../common/basepage";
import { config } from "../common/selenium.config";
import { By } from 'selenium-webdriver';

export class HomePage  {

  async navigateTo(path) {
    return driver.get(`${config.baseurl}/${path}`);
  }

  async getPageHeadingText() {
    return await driver.findElement(By.xpath('//h1')).getText();
  }
}