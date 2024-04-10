const {test,expect} = require('@playwright/test');

test('check make a submit payment of tostmaster', async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/angularpractice");

    // fill the data by using a diffrent getBy method
    await page.locator(".form-control.ng-untouched.ng-pristine.ng-invalid[name='name']").fill("Akshay More");
    await page.locator("input[name='email']").fill("akshaymore@gmail.com");
    await page.getByPlaceholder("Password").fill("Akshay@1234");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Student").click();
    //await page.locator("[name='bday']").fill("01-06-1993");
    await page.getByRole("button",{name:"submit"}).click();
    await page.getByRole("link",{name:"Shop"}).click();
    await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button",{name:"Add"}).click();
    await page.getByRole("link",{name:"Checkout"}).click();
    await page.pause();


})