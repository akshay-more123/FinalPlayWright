const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pageObject/LoginPage');
const {HomePage} = require('../pageObject/HomePage');
const {OrderHistoryPage} = require('../pageObject/OrderHistoryPage');
const {CartPage} = require('../pageObject/CartPage');
const {OrderReviewPage} = require('../pageObject/OrderReviewPage');
const dataset = JSON.parse(JSON.stringify(require('../ApiTesting/TestData.json')));


test('login with new user credentials', async ({page})=>
{
   // const userName = "akshaymore@gmail.com";
   // const PassWord=  "More@1234";
  //  const productName = "ADIDAS ORIGINAL";
   
   //LoginPage object
   const loginPage = new LoginPage(page);
   await loginPage.pageUrl(page);
   await loginPage.loginPageDetails(dataset.userName,dataset.PassWord);

   //HomePage Object Object
   const homePge = new HomePage(page);
   await homePge.searchProductAndAddToCart(dataset.productName);
   await homePge.clickOnAddToCart(page);
   await homePge.clickOnCheckOut(page);
   //await homePge.navigateToOrders();

   //OrderReviewPage object
   const orderReview = new OrderReviewPage(page);
   await orderReview.fillTheDetails();
   await orderReview.searchCountryAndSelect();
   //await orderReview.SubmitAndGetOrderId();
   const orderid = await orderReview.SubmitAndGetOrderId()
   console.log(orderid);

   //orderHistory Object
   const orderhistory = new OrderHistoryPage(page);
   orderhistory.clickOnOrder(page);
   await orderhistory.searchOrderAndSelect(orderid);
   await orderhistory.getOrderId();

   //  //cartPage Object
   //  const cartPage = new CartPage(page);
   //  await cartPage.VerifyProductIsDisplayed(dataset.productName);
   //  await cartPage.checkout();
   //  await cartPage.getProductLocator(dataset.productName);

   //check whether the add to card product is visible in cart history
   // await page.locator("[routerlink*='cart']").click();
   //  await page.locator("div li").first().waitFor();
   //  const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
   //  expect(bool).toBeTruthy();
   //  await page.locator("button[type='button']").last().click();
   //  //

   //  //fill the personal information
   //  await page.locator("input[value='4542 9931 9292 2293']").fill("4542 9931 9292 4657");
   //  const firstDropDown = page.locator(".input.ddl").first();
   //  await firstDropDown.selectOption("06");
   //  const secondDropDown = page.locator(".input.ddl").last();
   //  await secondDropDown.selectOption("09");
   //  await page.locator(".input.txt").nth(1).fill("123");
   //  await page.locator(".input.txt").nth(2).fill("Akshay More");
   // //  await page.locator("[name='coupon']").fill("rahulshetty");
   // //  await page.locator("[type='submit']").click();

   //  //select the country
   // const CountrName =await page.locator("[placeholder='Select Country']").pressSequentially("Indonesia",{delay:100});
   //  const dropDown = page.locator(".ta-results");
   //  await dropDown.waitFor();
   //  const dropOption = await dropDown.locator("button").count();
   //  console.log(dropOption);
   //   const dropdown = page.locator(".ta-results");
   // await dropdown.waitFor();
   // const optionsCount = await dropdown.locator("button").count();
   // for (let i = 0; i < dropOption; ++i) {
   //    const text = await dropdown.locator("button").nth(i).textContent();
   //    if (text ===" Indonesia") {
   //       await dropdown.locator("button").nth(i).click();
   //       break;
   //    }
   // }

   // //click on Place Order
   // await page.locator(".btnn.action__submit.ng-star-inserted").click();

   // //verify thankyou for order massage
   // expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   // const ordriId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   // console.log(ordriId);

   // //check orderId in orderhistory
   // await page.locator("[routerlink*='myorders']").first().click();
   // await page.locator("tbody").waitFor();
   // const rowID = page.locator("tbody tr");
   // for(let i = 0; i < await rowID.count();++i)
   // {
   //    const orderIdDetails =await rowID.locator("th").nth(i).textContent();
   //    if(ordriId.includes(orderIdDetails))
   //    {
   //       await rowID.locator("button").first().click();
   //    }
   // }
    
    //await page.pause();
    await page.close();
   
})

