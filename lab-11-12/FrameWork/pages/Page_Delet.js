const {Builder, By, until} = require ('selenium-webdriver');
const { PageBase } = require('./PageBase');
//Добавить в избранное
class Page_Delet extends PageBase{
constructor(browser){
super(browser);
}

    async getBrowser(url){
        await this.driver.get(url); 
    }
    async maxSize(){
        await this.driver.manage().window().maximize();
    }

    async findElementByCSSandClick(xpath, name){
        await this.driver.findElement(By.xpath(xpath)).sendKeys(name);  
    }

    async Click_Page(xpath){
        await this.driver.findElement(By.xpath(xpath)).click();
    }

    async ClosePage(){
        await this.driver.quit();
    }

    async SleepPage(){
        await this.driver.sleep(5000);
    }
}

module.exports.Page_Delet = Page_Delet;

