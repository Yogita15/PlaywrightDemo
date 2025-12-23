const{test,expect}=require('@playwright/test')

test("Valid login",async function({page})
{
    //Launch url, maximize browser to fit full screen
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    //Login
    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()

    //Verify url
    await expect(page).toHaveURL(/dashboard/)

    //Logout
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()

    //Verify url
    await expect(page).toHaveURL(/login/)
})