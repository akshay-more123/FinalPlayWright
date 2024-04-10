const { Given,When, Then } = require('@cucumber/cucumber');
const {test,expect} = require('@playwright/test');
const playwright = require('@playwright/test');
const {LoginPage} = require('../../pageObject/HomePage');
const {HomePage} = require('../../pageObject/LoginPage');
const {OrderReviewPage} = require('../../pageObject/OrderReviewPage');
const {OrderHistoryPage} = require('../../pageObject/OrderHistoryPage');

Given('a login with Ecommerce application with valid {userName} and {password}', async function (userName, password) {
    // Write code here that turns the phrase above into concrete actions
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
     const page = await context.newPage();
     const loginPage = new LoginPage(page);
     await loginPage.pageUrl(page);
     await loginPage.loginPageDetails(dataset.userName,dataset.PassWord);
  
  });

  When('search a product and add {string} to cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    const product = page.locator(".card");
    const homePge = new HomePage(page);
    await homePge.searchProductAndAddToCart(dataset.productName);
    await homePge.clickOnAddToCart(page);
    await homePge.clickOnCheckOut(page);

  });


  Then('verify {string} is display in add to cart', async function () {
   const orderReview = new OrderReviewPage(page);
   await orderReview.fillTheDetails();
   await orderReview.searchCountryAndSelect();
   //await orderReview.SubmitAndGetOrderId();
   const orderid = await orderReview.SubmitAndGetOrderId()
   console.log(orderid);
  });

//   When('Enter a valid details and placed the order', async function () {
//     // Write code here that turns the phrase above into concrete actions
//    //fill the personal information
//    await page.locator("input[value='4542 9931 9292 2293']").fill("4542 9931 9292 4657");
//    const firstDropDown = page.locator(".input.ddl").first();
//    await firstDropDown.selectOption("06");
//    const secondDropDown = page.locator(".input.ddl").last();
//    await secondDropDown.selectOption("09");
//    await page.locator(".input.txt").nth(1).fill("123");
//    await page.locator(".input.txt").nth(2).fill("Akshay More");
//   //  await page.locator("[name='coupon']").fill("rahulshetty");
//   //  await page.locator("[type='submit']").click();

//    //select the country
//   const CountrName =await page.locator("[placeholder='Select Country']").pressSequentially("Indonesia",{delay:100});
//    const dropDown = page.locator(".ta-results");
//    await dropDown.waitFor();
//    const dropOption = await dropDown.locator("button").count();
//    console.log(dropOption);
//     const dropdown = page.locator(".ta-results");
//   await dropdown.waitFor();
//   const optionsCount = await dropdown.locator("button").count();
//   for (let i = 0; i < dropOption; ++i) {
//      const text = await dropdown.locator("button").nth(i).textContent();
//      if (text ===" Indonesia") {
//         await dropdown.locator("button").nth(i).click();
//         break;
//      }
//   }

//   //click on Place Order
//   await page.locator(".btnn.action__submit.ng-star-inserted").click();
//   });


  Then('verify place order is present in order history', async function () {
    // Write code here that turns the phrase above into concrete actions
   
    const orderhistory = new OrderHistoryPage(page);
   orderhistory.clickOnOrder(page);
   await orderhistory.searchOrderAndSelect(orderid);
   await orderhistory.getOrderId();
  });
