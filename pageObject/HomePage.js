class HomePage
{
    constructor(page)
    {
        this.page=page;
        this.products = page.locator(".card");
        this.cart =  page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.submitBtn = page.locator("[type='button']").nth(1);
        
    }

    async searchProductAndAddToCart(productName)
    {
        const count = await this.products.count();
        for (let i = 0; i < count; ++i) {
            if(await this.products.nth(i).locator("b").textContent()===productName)
            {
              await this.products.nth(i).locator("text= Add To Cart").click();  
              break;
            }
         }
    }

    async clickOnAddToCart(page)
    {
        await this.cart.click();
    }

    async clickOnCheckOut()
    {
        await this.submitBtn.click();
    }

    async navigateToOrders()
{
    await this.orders.click();
}
}
module.exports={HomePage};