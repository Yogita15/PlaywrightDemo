const{expect}=require('@playwright/test')

class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.username="#email1"
        this.password="//input[@placeholder='Enter Password']"
        this.signinbutton="//button[text()='Sign in']"
    }

    async loginToApplication(user,pass)
    {
        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.signinbutton)
    }

    async verifySignInButton()
    {
        await expect(this.page.locator(this.signinbutton)).toBeVisible()
    }
}

module.exports=LoginPage