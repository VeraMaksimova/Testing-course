const {Builder, By, until} = require ('selenium-webdriver');
const { PageBase } = require('./PageBase');

class  Mytest1 extends PageBase{
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

    async ClosePage(){
        await this.driver.sleep(5000);
        await this.driver.quit();
    }
}

module.exports.Mytest1 = Mytest1;

