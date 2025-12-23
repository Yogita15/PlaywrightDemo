const{test,expect}=require('@playwright/test')

test("My first test",async function({page})
{
    //Hard assertion
    await expect(12).toBe(12)
})

test("My second test",async function({page})
{
    //Hard assertion
    await expect(12.0).toBe(12.0)
}
)

test("My third test", async function({page})
{
    //Hard assertion
    await expect(12).toBe(122.0)
}
)

test.only("My fourth test",async function({page})
{
    //Hard assertion
    await expect("Hello world".includes("Hello")).toBeTruthy()
}
)




