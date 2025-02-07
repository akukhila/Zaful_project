Hello, 

This is my own repository with Playwright tests

# Initial installations:

1. Please check that you have all necessary installations: Node.js, Git, IDE (e.g.VS Code).
2. Clone the project from the GitHub repo. 
3. To install all dependencies from package.json please execute the command `npm install`.
4. Execute command `npx playwright install` to  install all browsers: Chromium, FireFox, Webkit.
5. Create .env file,  use .env.example as an example.
6. Install also Playwright extension (Playwright Test for VSCode).

# Project structure
In the project was implemented a Page Object pattern

There are 2 main folders:
- helper 
- tests

Helper folder contains files and classes for separate application pages.
For example, we have **signInPage.ts** file wich contain only methods related to sign in actions.
The same for **homePage.ts, myFavoritesPage.ts, catalogPage.ts** files.
PageManager class(**pageManager.ts file**) contains import of all  classes describing each page.

 Tests folder contain 2 files with tests :
  - for sign in test cases: **LoginPage.spec.ts** file
  - for test cases related to 'My Favorites' functionality: **myFavoritesPage.spec.ts**

Each method in the separate test represents the step that could be done by the customer.

**playwright.config.ts** file contain all necessary settings related to the tests and test execution

# Test execution
1.You can use command line for test execution
e.g command `npx playwright test`.
For more information regarding the commands please check playwright documentation.
https://playwright.dev/docs/running-tests

2.Tests could be executed in the UI mode.
Use command `npx playwright test --ui`

3.You can also run tests directly in VSCode.
e.g. Testing tab or directly in the files with tests


Thank you for viewing my project!