const {Builder, By, until, Key} = require ('selenium-webdriver');
//
//tyt10tyt11
async function Delete_S() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://mybook.ru/');    
    await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/header/div/div[1]/div/div[5]/div/a")).click();
    await driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/form/div[1]/div[2]/div[1]/div/input")).sendKeys("ghfevbvskj@gmail.com");  
    await driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/form/div[2]/div[2]/div[1]/div/span/input")).sendKeys("tyt10tyt11");  
    await driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div/div[2]/div/div/button")).click();//
    await driver.sleep(5000);

    //БЫЛ ВХОД
    await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/header/div/div[1]/div/div[3]/div/div/div/div[4]/a")).click();


//

await driver.sleep(5000);
await driver.findElement(By.xpath("/html/body/div[1]/div/section/div[3]/div/div[1]/div[2]/div[1]/label")).click();//троеточик

///


await driver.sleep(5000);
await driver.quit();
}
Delete_S();