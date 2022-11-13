//Проверка заполнения поля поиска 
const {Builder, By, until, Key} = require ('selenium-webdriver');

async function SeachCase() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://mybook.ru/');    

    await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/header/div/div[1]/div/div[2]/div/div/div/span/input")).sendKeys("Анна Каренина", Key.ENTER);  
    await driver.sleep(5000);
    await driver.quit();
}
SeachCase();