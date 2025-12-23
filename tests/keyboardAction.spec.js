const{test,expect}=require('@playwright/test')

test("Keyboard action",async function({page})
{
    //Launch url
    await page.goto("https://www.google.com")

    //Keyboard action - Type ice-creams then delete
    await page.locator("textarea[name='q']").fill("Ice creams")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Backspace")

    //Keyboard action - Type chocolate cakes then delete cakes
    await page.locator("textarea[name='q']").fill("Chocolate cakes")
    await page.keyboard.down("Shift")
    for(let i=0;i<6;i++)
    {
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")

})