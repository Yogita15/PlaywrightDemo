const{test,expect}=require('@playwright/test')

test("Handle multiple tabs",async function({browser})
{
    //Create new context
    const context=await browser.newContext()

    //Create new page
    const page=await context.newPage()

    //Launch url
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //Promise all is used to prevent timing issues by starting to listen before clicking, clicking and waiting at the same time
    const [newPage] = await Promise.all
    ([
        context.waitForEvent("page"),
        page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ])

    //Perform actions on new page
    await newPage.locator("(//input[@name='email'])[2]").fill("abc@gmail.com")
    await newPage.waitForTimeout(3000)
    await newPage.close()

    //Perform actions on main page
    await page.locator("#email1").fill("admin@gmail.com")
    await page.waitForTimeout(3000)
})
