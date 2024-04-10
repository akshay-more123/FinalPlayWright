const {test,expect} = require('@playwright/test');

test('check dropdown and radio button',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //give the credential
    const userName = await page.locator('#username').fill("rahulshettyacademy");
    const pass = await page.locator('#password').fill("learning");
    const dropDown = page.locator('select.form-control');
    await dropDown.selectOption("Teacher");

    //if we want to check anybroken link
    const document = page.locator("[href*='documents-request']");

    //radio btn
    const radioBtn = await page.locator('.radiotextsty').first().click();
    // check radio btn is selector not
    await expect(page.locator('.radiotextsty').first()).toBeChecked();

    //const popup = await page.locator('#okayBtn').click();
    

    // //check Box
    const checkBox = await page.locator('#terms').click();
    // verify whether the check box is select or not
    await expect(page.locator('#terms')).toBeChecked();

    //check that document link is valid or not
    await expect(document).toHaveAttribute("class","blinkingText");

    const signBtn = await page.locator('#signInBtn').click();

    //print first and all element
    console.log(await page.locator('.card-body a').first().textContent());
    await page.locator('.card-body a').first().waitFor();
    const Element = await page.locator('.card-body a').allTextContents();
    console.log(Element);
    
    //await page.pause();
})




    //how to handle child window
    test('@handled child window',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


    // if we want to an action on multiple window or if we want to a multiple window then 
    const document = page.locator("[href*='documents-request']");

    // use promise method for handling a multiple window
    const[newPage] = await Promise.all(
    [  
         context.waitForEvent('page'),
         document.click(),
        

    ])

    
    const text = await newPage.locator('.red').textContent();
    console.log(text);
    const arr = text.split("@")
    const domain = arr[1].split(" ")[0];
    console.log(domain);
    await page.locator('#username').type(domain);
    console.log(await page.locator('#username').textContent());
   await page.pause();

})


    
