const { Builder, By, until, Key } = require('selenium-webdriver');

const getImagesLinks = async (userID) => {
    const home_page = "https://www.pinterest.com/"
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {
        // Navigate to Url
        // await driver.get(home_page);

        // open login modal
        // let login_btn = await driver.wait(until.elementLocated(By.tagName("button")))
        // await login_btn.click();


        // enter email
        // let username_input = await driver.wait(until.elementLocated(By.id("email")))
        // await username_input.sendKeys(process.env.USERNAMEPINTEREST);

        // enter password
        // let password_input = await driver.wait(until.elementLocated(By.id("password")))
        // await password_input.sendKeys(process.env.PASSWORDPINTEREST, Key.ENTER);

        // load user page
        await driver.get(home_page + userID + "/");

        // get images
        let imgResults = await driver.findElements(By.xpath("//img"))
        let imgSrcs = []

        for (i of imgResults) {
            let src = await i.getAttribute("src")
                .then(res => res)
                .catch(err => {
                    console.log("err", err);
                    return ""
                })
            imgSrcs.push(src)
            console.log("res src :", src)
        }

        return imgSrcs.filter(img => img !== "")

    }
    catch (error) {
        console.log("error", error);
    }
    finally {
        console.log("finally");
        await driver.quit();
    }
}

module.exports = getImagesLinks