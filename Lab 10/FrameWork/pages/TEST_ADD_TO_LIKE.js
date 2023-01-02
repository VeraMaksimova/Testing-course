const {PageBase} = require('./PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {Page_Add_To_Like} = require('./Page_Add_To_Like.js')

//ТЕСТ-КЕЙС ПОИСК
const TestSearch = async () => {
   
const mytest1 = new Page_Add_To_Like('chrome');
await mytest1.maxSize();
await mytest1.getBrowser('https://mybook.ru/');
await mytest1.Click_Page("/html/body/div[1]/div/div[1]/header/div/div[1]/div/div[5]/div/a");
await mytest1.findElementByCSSandClick("/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/form/div[1]/div[2]/div[1]/div/input", "ghfevbvskj@gmail.com");
await mytest1.findElementByCSSandClick("/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/form/div[2]/div[2]/div[1]/div/span/input", "tyt10tyt11");
await mytest1.Click_Page("/html/body/div[2]/div/div[2]/div/div[2]/div/div/button");
await mytest1.SleepPage();
await mytest1.Click_Page("/html/body/div[1]/div/div[1]/header/div/div[2]/div/div/div[1]/div/div[1]/div/a");
await mytest1.Click_Page("/html/body/div[1]/div/div[1]/header/div/div[2]/div/div/div[1]/div/div[1]/div/a");
await mytest1.ClosePage();
} 

TestSearch();
   

