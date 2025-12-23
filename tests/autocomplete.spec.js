const{test,expect}=require('@playwright/test')

test("Verify application title",async function({page})
{
    //Launch url
    await page.goto("https://www.google.com")

    //Select option with text 'Woolworths' from auto-complete
    await page.locator("textarea[name='q']").fill("Ice creams")
    
    const elements=await page.$$("//div[@role='presentation']")
    for(let i=0;i<elements.length;i++)
    {
        const text = await elements[i].textContent()
        if(text.includes('Woolworths'))
        {
            await elements[i].click()
            break
        }
    }
})