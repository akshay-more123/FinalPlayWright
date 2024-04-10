class LoginPage


{

    constructor(page)
    {
       this.page = page;
       this.username=page.locator('#userEmail');
       this.password= page.locator('#userPassword');
       this.lgnBtn= page.locator('#login');
    }


    async loginPageDetails(userName,PassWord)
    {
        await this.username.fill(userName);
        await this.password.fill(PassWord);
        await this.lgnBtn.click();
    }

    async pageUrl(page)
    {
        await page.goto("https://rahulshettyacademy.com/client/");
    }

}

module.exports={LoginPage};



