const{test,expect}=require('@playwright/test')

test("Verify error message",async function({page})
{
    //Launch url
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //Login
    await page.getByPlaceholder("Username").fill("Admin")
    await page.locator("input[name='password']").fill("Admin123")
    await page.locator("//button[@type='submit']").click()

    //Verify error mesage
    const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()
    console.log("Error message is "+errorMessage)

    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage===("Invalid credentials")).toBeTruthy()
    
})
