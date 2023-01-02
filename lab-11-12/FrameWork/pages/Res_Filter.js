const {PageBase} = require('./PageBase.js');
const {Builder, By, until} = require ('selenium-webdriver');
const {My_Test_Filter} = require('./My_Test_Filter');


//ТЕСТ КЕЙС ФИЛЬТР ПОЛЬСКОГО ЯЗЫКА
const FilterClick = async () => {
   
    const filter = new My_Test_Filter('chrome');
    await filter.maxSize();
    await filter.getBrowser('https://mybook.ru/');
    await filter.findElementClick("/html/body/div[1]/div/div[1]/header/div/div[2]/div/div/div[1]/div/div[3]/div/a");
    await filter.findElementClick1("/html/body/div[1]/div/section/div[3]/div/div[2]/div/div[2]/ul[2]/li/div/div");
    await filter.findElementClick2("/html/body/div[1]/div/section/div[3]/div/div[2]/div/div[2]/ul[2]/li/ul/li[9]/span/div");
    await filter.ClosePage();
    } 
    
    FilterClick();
       