**PlaywrightDemo**  
This project contains automated tests built using Playwright with JavaScript. It is designed to test web applications across multiple browsers with fast, reliable, and modern testing practices.


**Key Features**  
Automated UI testing of web components including alerts, iframes, keyboard events, and mouse interactions.  
Implemented the Page Object Model (POM) to enhance test structure, reusability, and maintainability.  
Cross-browser test execution on Chromium, Firefox, and WebKit.  
Generated HTML test reports using Playwright’s built-in reporting capabilities.  
Version-controlled test scripts managed using GitHub.


**Pre-requisites**  
Before running the tests, ensure the following are installed :
Node.js (v16 or higher),
npm (comes with Node.js)


**Setup Instructions**  
Clone the repository :
git clone https://github.com/Yogita15/PlaywrightDemo.git

Install project dependencies:
npm install

Install Playwright browsers:
npx playwright install


**Running tests**  
To execute all tests :
npx playwright test 

To execute a specific test file :
npx playwright test filename

After test execution, generate and view the HTML report :
npx playwright show-report
