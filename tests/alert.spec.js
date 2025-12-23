const{test,expect}=require('@playwright/test')

test("Handle alert",async function({page})
{
    //Launch url
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     //Handle alert
    page.on('dialog',async function(dialogWindow)
    {
        expect(dialogWindow.type()).toContain("alert")
        expect(dialogWindow.message()).toContain("I am a JS Alert")
        await dialogWindow.accept()

    })

    //Click on alert
    await page.locator("//button[text()='Click for JS Alert']").click()

})

test("Handle confirm box",async function({page})
{
    //Launch url
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     //Handle confirm
    page.on('dialog',async function(dialogWindow)
    {
        expect(dialogWindow.type()).toContain("confirm")
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        await dialogWindow.dismiss()

    })

    //Click on confirm
    await page.locator("//button[text()='Click for JS Confirm']").click()

})

test("Handle prompt",async function({page})
{
    //Launch url
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     //Handle prompt
    page.on('dialog',async function(dialogWindow)
    {
        expect(dialogWindow.type()).toContain("prompt")
        expect(dialogWindow.message()).toContain("I am a JS prompt")
        await dialogWindow.accept("Hello world")

    })
    
    //Click on prompt
    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout(5000)

})