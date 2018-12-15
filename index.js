const webdriver = require('selenium-webdriver');
require('chromedriver');

var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get("https://heyitstomai.com/");