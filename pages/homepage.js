const{expect}=require('@playwright/test')

class HomePage
{
    constructor(page)
    {
        this.page=page
        this.manageoption="//span[normalize-space()='Manage']"
        this.menu="//img[@alt='menu']"
        this.signoutbutton="//button[normalize-space()='Sign out']"
        this.signinbutton="//button[text()='Sign in']"
    }

    async verifyManageOption()
    {
        await expect(this.page.locator(this.manageoption)).toBeVisible()
    }

    async logoutFromApplication()
    {
        await this.page.click(this.menu)
        await this.page.click(this.signoutbutton)
    }
}

module.exports=HomePage