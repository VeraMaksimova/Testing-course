/*1)	Зайти на сайт  https://mybook.ru/
2)	Зайти в раздел Бесплатные книги
3)	Нажать в разделе фильтры на кнопку “Язык”
4)	Выбрать язык “Польский”
*/

const {Builder, By, until, Key} = require ('selenium-webdriver');

async function PolskaFilter() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    await driver.get('https://mybook.ru/');    

    await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/header/div/div[2]/div/div/div[1]/div/div[3]/div/a")).click();
    await driver.findElement(By.xpath("/html/body/div[1]/div/section/div[3]/div/div[2]/div/div[2]/ul[2]/li/div/div")).click();
    await driver.findElement(By.xpath("/html/body/div[1]/div/section/div[3]/div/div[2]/div/div[2]/ul[2]/li/ul/li[9]/span/div")).click();
    await driver.sleep(5000);
    await driver.quit();
}
PolskaFilter();