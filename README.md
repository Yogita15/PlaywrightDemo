This project contains end-to-end automated tests built using Playwright with JavaScript. It is designed to test web applications across multiple browsers with fast, reliable, and modern testing practices.

Key Features :
Automated UI testing of web components including alerts, iframes, keyboard events, and mouse interactions

Implemented the Page Object Model (POM) to enhance test structure, reusability, and maintainability

Cross-browser test execution on Chromium, Firefox, and WebKit

Generated HTML test reports using Playwright’s built-in reporting capabilities

Version-controlled test scripts managed using GitHub

Pre-condition :
Node.js (v16 or higher),
npm (comes with Node.js)

Clone above repository :
git clone https://github.com/Yogita15/PlaywrightDemo.git

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

To execute test :
npx playwright test filename

After test execution, generate and view the HTML report :
npx playwright show-report
