const { expect } = require("@playwright/test");

class OrderReviewPage
{
constructor(page)
{
    this.page = page;
this.country = page.locator("[placeholder*='Country']");
this.dropdown = page.locator(".ta-results");
this.emailId = page.locator(".user__name [type='text']").first();
this.submit =  page.locator(".action__submit");
this.orderConfirmationText = page.locator(".hero-primary");
this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
this.CardNumber = page.locator("input[value='4542 9931 9292 2293']");
this.firstDropDown = page.locator(".input.ddl").first();
this.seconDropDown = page.locator(".input.ddl").last();
this.cvvNumber = page.locator(".input.txt").nth(1);
this.CarduserName = page.locator(".input.txt").nth(2);
this.dropDownCount= this.dropdown.locator("button").count();
//this.text = dropdown.locator("button").nth(i).textContent();

}
async fillTheDetails()
{
    await this.CardNumber.fill("4542 9931 9292 4657");
    await this.firstDropDown.selectOption("06");
    await this.seconDropDown.selectOption("09");
    await this.cvvNumber.fill("123");
    await this.CarduserName.fill("Akshay More");
}
async searchCountryAndSelect()
{

    await this.country.pressSequentially("Indonesia",{delay:100});
    await this.dropdown.waitFor();
    const optionsCount = await this.dropdown.locator("button").count();
    for(let i =0;i< optionsCount; ++i)
    {
      const  text =  await this.dropdown.locator("button").nth(i).textContent();
        if(text === " Indonesia")
        {
           await this.dropdown.locator("button").nth(i).click();
           break;
        }
    }

}

// async VerifyEmailId(username)
// {
//     await expect(this.emailId).toHaveText(userName);
// }

async SubmitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}
}
module.exports = {OrderReviewPage};