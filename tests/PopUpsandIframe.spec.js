const {test,expect} = require('@playwright/test');


test('handle popups and iframe',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //check for hidden element is visible
    await expect(page.locator("#displayed-text")).toBeVisible();
    
    await page.locator("#hide-textbox").click();
    //after click the hidden element element is not visible
    await expect(page.locator("#displayed-text")).toBeHidden();

    //handle popups action
    page.on('dialog',dialog=>dialog.accept());
    await page.locator("#confirmbtn").click();

    //handle iframe
    const frame =  page.frameLocator("#courses-iframe");
    //await frame.locator("")



})