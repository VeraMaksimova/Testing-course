const {PageBase} = require('./PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {Mytest1} = require('./Mytest1.js')


const TestSearch = async () => {
   
const mytest1 = new Mytest1('chrome');
await mytest1.maxSize();
await mytest1.getBrowser('https://mybook.ru/');
await mytest1.findElementByCSSandClick("/html/body/div[1]/div/div[1]/header/div/div[1]/div/div[2]/div/div/div/span/input", "Анна Каренина");
await mytest1.ClosePage();
} 

TestSearch();
   

