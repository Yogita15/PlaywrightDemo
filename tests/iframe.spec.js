const{test,expect}=require('@playwright/test')

test("Handle iframes",async function({page})
{
    //Launch url
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

    //Perform actions within frame
    const iframe=await page.frameLocator("//frame[@name='packageListFrame']")
    await iframe.locator("//a[text()='java.applet']").click()
    await page.pause()

})
    