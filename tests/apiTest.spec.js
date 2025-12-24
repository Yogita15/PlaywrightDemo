//Import test,expect from @playwright/test
const{test,expect}=require('@playwright/test')

//Get request
test("API Get request",async function({request})
{
    const response = await request.get("https://simple-books-api.click/status")
    
    //Validate response
    expect(response.status()).toBe(200)

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.status).toBe("OK")

})

//Post request
test("API Post request",async function({request})
{
    const response = await request.post('https://postman-echo.com/post', {
    data: 
    {
      name: 'admin',
      role: 'QA Engineer'
    }
  });

   // Validate response
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody.json.name).toBe('admin');
  expect(responseBody.json.role).toBe('QA Engineer');

})


//Put request
test("API Put request",async function({request})
{
    const response = await request.put('https://postman-echo.com/put', {
    data: 
    {
      id : 101,
      name: 'admin',
      role: 'Senior QA Engineer'
    }
  });

   // Validate response
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);

  expect(responseBody.json.id).toBe(101);
  expect(responseBody.json.name).toBe('admin');
  expect(responseBody.json.role).toBe('Senior QA Engineer');

})

//Delete request
test("API Delete request",async function({request})
{
    const response = await request.delete('https://postman-echo.com/delete', {
    data: 
    {
      id : 101
    }
  });

   // Validate response
  expect(response.status()).toBe(200);

})



