const{test,expect}=require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../testDataJSON.json")))

test.describe("Data driven login test",async function()
{
    for (const data of testdata)
    {
        test.describe(`Login with user ${data.id}`,async function()
        {
            test("Login to application",async function({page})
            {
                //Launch url
                await page.goto("https://freelance-learn-automation.vercel.app/login")

                //Login
                await page.getByPlaceholder("Enter Email").fill(data.username)
                await page.getByPlaceholder("Enter Password").fill(data.password)

            })
        })
    }  
})