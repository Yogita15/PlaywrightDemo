const{test,expect}=require('@playwright/test')

test("Mover hover and mouse click",async function({page})
{
    //Launch url
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //Login
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await page.getByRole("button",{name:"Sign in"}).click()

    //Move hover, mouse click
    await page.locator("//span[text()='Manage']").hover()
    await page.locator("//a[text()='Manage Courses']").click()
})