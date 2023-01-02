const {Builder, By, until} = require ('selenium-webdriver');
const { PageBase } = require('./PageBase');
//ТЕСТ КЕЙС ФИЛЬТР ПОЛЬСКОГО ЯЗЫКА
class  My_Test_Filter extends PageBase{
constructor(browser){
super(browser);
}

    async getBrowser(url){
        await this.driver.get(url); 
    }
    async maxSize(){
        await this.driver.manage().window().maximize();
    }

    async findElementClick(xpath){
        await this.driver.findElement(By.xpath(xpath)).click();
    }

    async findElementClick1(xpath1){
        await this.driver.findElement(By.xpath(xpath1)).click();
    }

    async findElementClick2(xpath2){
        await this.driver.findElement(By.xpath(xpath2)).click();
    }

    async ClosePage(){
        await this.driver.sleep(5000);
        await this.driver.quit();
    }
}

module.exports.My_Test_Filter = My_Test_Filter;

