const{test,expect}=require('@playwright/test')

test("Mover hover and mouse click",async function({page})
{
    //Launch url
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    //Select single value from dropdown 
    await page.locator("#state").selectOption({label:"Goa"})
    await page.waitForTimeout(3000)
   
    await page.locator("#state").selectOption({value:"Maharashtra"})
    await page.waitForTimeout(3000)

    await page.locator("#state").selectOption({index:3})
    await page.waitForTimeout(3000)

    //Assert dropdown option using textContent
    const value=await page.locator("#state").textContent()
    console.log("All dropdown values are "+value)
    await expect(value.includes("Kerala")).toBeTruthy()

    //Select multiple values from dropdown
    await page.locator("#hobbies").selectOption(["Playing","Reading"])
    await page.waitForTimeout(3000)
})