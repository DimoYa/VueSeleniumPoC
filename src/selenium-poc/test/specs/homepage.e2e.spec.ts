import { HomePage } from "../page-objects/homepage.po";
import { driver } from "../common/basepage";
import { assert, expect } from "chai";

describe('HomePage', () => {

  let page;

  beforeEach(async () => {
    page = new HomePage;
  });

  it('should display welcome message', async () => {
    await page.navigateTo('/');
    assert.equal(await page.getPageHeadingText(), 'Welcome to Your Vue.js App')
  });

  afterEach(async () => {
    driver.quit();
  });
});
