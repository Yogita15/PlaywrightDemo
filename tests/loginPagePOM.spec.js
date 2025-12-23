const{test,expect}=require('@playwright/test')
const LoginPage=require("../pages/loginpage")
const HomePage=require("../pages/homepage")

test("Valid login",async function({page})
{
    //Launch url, maximize browser to fit full screen
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //Sign in
    const loginPage=new LoginPage(page)
    await loginPage.loginToApplication("admin@email.com","admin@123")

    //Verify if sign in successful & sign out
    const homePage=new HomePage(page)
    await homePage.verifyManageOption()
    await homePage.logoutFromApplication()

    //Verify if sign out successful
    await loginPage.verifySignInButton()
})