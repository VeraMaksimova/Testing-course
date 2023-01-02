const {PageBase} = require('./PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {Page_Delet} = require('./Page_Delet.js')

//ТЕСТ-КЕЙС ФИЛЬТР
const TestSearch = async () => {
   
const mytest1 = new Page_Delet('chrome');
await mytest1.maxSize();
await mytest1.getBrowser('https://mybook.ru/');
await mytest1.Click_Page("/html/body/div[1]/div/div[1]/header/div/div[1]/div/div[5]/div/a");
await mytest1.findElementByCSSandClick("/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/form/div[1]/div[2]/div[1]/div/input", "ghfevbvskj@gmail.com");
await mytest1.findElementByCSSandClick("/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/form/div[2]/div[2]/div[1]/div/span/input", "tyt10tyt11");
await mytest1.Click_Page("/html/body/div[2]/div/div[2]/div/div[2]/div/div/button");
await mytest1.SleepPage();
await mytest1.Click_Page("/html/body/div[1]/div/div[1]/header/div/div[1]/div/div[3]/div/div/div/div[4]/a");
await mytest1.SleepPage();
await mytest1.Click_Page("/html/body/div[1]/div/section/div[3]/div/div[1]/div[2]/div[1]/label");
} 

TestSearch();