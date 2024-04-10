const {test,expect} = require('@playwright/test');

test('create the instance and open the browser', async ({browser})=>
{
 
    /// creaate a fresh context
   const context = await browser.newContext();
   // create a new page on browser
   const page = await context.newPage();


   // make a variable globally with locater properties
   const userName = page.locator('#username');
   const loginBtn = page.locator("[type='submit']");


   // hit the url on new page
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

   // print the title name
   console.log(await page.title());

   
   // enter the value in input field after locate.... username and password
   await userName.fill("rahulshettyacade");
  await page.locator("[name='password']").fill("learning");
   await loginBtn.click();

   //if username or password is incorrect then print the error msg
  console.log(await page.locator("[style='display: block;']").textContent());

  // using assertion
  await expect(page.locator("[style='display: block;']")).toContainText("Incorrect");

  
  // if provide input is wrong then we can erase the input valuse by using fill("") method
  await userName.fill("");
  // after erase the value we can provide correct input value
  await userName.fill("rahulshettyacademy")
  await loginBtn.click();

  // grabe the first elemnt text we can use first() method
  //console.log(await page.locator(".card-body a").first().textContent());


  // if we want to grab all element text then we can use
  await page.locator(".card-body a").first().waitFor();
 const allElement_Text = await page.locator(".card-body a").allTextContents();
 console.log(allElement_Text);
 



})


// test(' open the new page on browser', async ({page})=>
// {

 
//     await page.goto("https://google.com/")
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Google");

// })


