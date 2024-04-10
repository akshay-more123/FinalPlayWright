const {test,expect} = require('@playwright/test');
const { log } = require('console');

test('login with new user credentials', async ({page})=>
{
    await page.goto('https://rahulshettyacademy.com/client/');
    //await page.goto('https://rahulshettyacademy.com/client/a');
    await page.getByPlaceholder('email@example.com').click();
    await page.getByText('Log inEmailPasswordLoginForgot password?Don\'t have an account? Register here').click();
    await page.getByPlaceholder('email@example.com').click();
    await page.getByPlaceholder('email@example.com').fill('akshaymore@gmail.com');
    await page.getByPlaceholder('enter your passsword').click();
    await page.getByPlaceholder('enter your passsword').fill('More@1234');
    await page.getByRole('button', { name: 'Login' }).click();
    // const product = page.locator(".card");
    // const count = await product.count();
    var allProduct = page.locator(".card-body");
    const count1 = await allProduct.count();
    console.log(count1);
    // await page.getByRole('button', { name: ' Add To Cart' }).nth(2).click();
    // await page.getByRole('button', { name: ' Cart' }).click();
    // await page.getByRole('button', { name: 'Checkout❯' }).click();
    await page.pause();

   

  

    

})