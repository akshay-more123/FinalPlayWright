const {test,expext,request, expect} = require('@playwright/test');
const LoginPayload = {userEmail:"akshaymore@gmail.com",userPassword:"More@1234"};
const orderPayload= {orders:[{country:"China",productOrderedId:"6581cade9fd99c85e8ee7ff5"}]}
let Tokens;
let orderId;
test.beforeAll( async ()=>
{
    //login Api
    const Apicontext =await request.newContext();
    const loginRes = await Apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
          data: LoginPayload
    }) 
    //check status code
    expect(loginRes.ok()).toBeTruthy();

    const Response = await loginRes.json();
    Tokens = Response.token;
    console.log(Tokens);

    //orderId APi
const orderResponse = await Apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
{
 data: orderPayload,
 Headers:{
       'Authorization' : Tokens,
       'Content-Type'  : 'application/json'

         },
})
const orderRes = await orderResponse.json();
console.log(orderRes);
orderId = orderRes.orders[0];
// console.log(orderId);
})


test('login with new user credentials', async ({browser})=>
{

   const context = await browser.newContext();
   const page = await context.newPage();
   page.addInitScript(value=>{
    window.localStorage.setItem('token',value)

   },Tokens);
   await page.goto("https://rahulshettyacademy.com/client/");
   console.log(await page.title());

//    // find the locator for login
//    const userName = await page.locator('#userEmail').fill("akshaymore@gmail.com");
//    const pass = await page.locator('#userPassword').fill("More@1234");
//    const lgnBtn = await page.locator('#login').click();
// const product = page.locator(".card");
// const productName = "ADIDAS ORIGINAL";
// const count = await product.count();
// console.log(count);



// for (let i = 0; i < count; ++i) {
//    if(await product.nth(i).locator("b").textContent()===productName)
//    {
//      await product.nth(i).locator("text= Add To Cart").click();  
//      break;
//    }
// }

// //check whether the add to card product is visible in cart history
//  await page.locator("[routerlink*='cart']").click();
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
//  //select the country
//  const CountrName =await page.locator("[placeholder='Select Country']").pressSequentially("Indonesia",{delay:100});
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

//check orderId in orderhistory
await page.locator("[routerlink*='myorders']").first().click();
await page.locator("tbody").waitFor();
const rowID = page.locator("tbody tr");
for(let i = 0; i < await rowID.count();++i)
{
   const orderIdDetails =await rowID.locator("th").nth(i).textContent();
   if(orderId.includes(orderIdDetails))
   {
      await rowID.locator("button").first().click();
   }
}
 
 await page.pause();

})