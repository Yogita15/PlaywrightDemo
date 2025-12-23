const{test,expect}=require('@playwright/test')

test("Verify application title",async function({page})
{
    //Launch url
    await page.goto("https://www.google.com")

    //Verify url, title
    const url=await page.url()
    console.log("URL is "+url)

    const title=await page.title()
    console.log("Title is "+title)
    await expect(page).toHaveTitle("Google")
})
