const{test,expect}=require('@playwright/test')

test("File upload",async function({page})
{
    //Launch url
    await page.goto("https://the-internet.herokuapp.com/upload")

    //File upload
    await page.locator("#file-upload").setInputFiles("./uploads/sample.txt")
    await page.locator("#file-submit").click()

    //Assert successful file upload
    await expect(page.locator("//h3")).toHaveText("File Uploaded!")
})