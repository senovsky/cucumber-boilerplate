# Automated regression tests

This repository contains automated regression tests. Based on [boilerplate](https://github.com/webdriverio/cucumber-boilerplate) to run WebdriverIO tests with [Cucumber](https://cucumber.io/). Instead of writing complicated test code that only developers can understand, Cucumber uses an ordinary language to describe the steps of the E2E tests.

## Test scenarios

Test scenarios are specified in the `features` folder.
Step definitions (Gherkin steps) are specified in the `steps` folder. They are calling functions specified in the `support` folder.
All the step definitions should be written in a way that allows the step to be used in more than one scenario (i.e. no scenario-specific steps).

## Requirements

- Node.js LTS, including npm ([NVM](https://github.com/coreybutler/nvm-windows) recommended)
- Selenium server running at http://localhost:4444/wd/hub with chromedriver
- Chrome

## Jenkinsfile

In the root folder, the `Jenkinsfile` contains stage `e2e-tests`. It enables the tests to run automatically on a server and create a JUnit report.

## Manual installation & test run

Clone this repository and run those commands:

```
npm install
```

```
npm test
```

## View reports

- The terminal shows progress in detail
- JUnit report is available after the test run in the `.tmp` folder
- slackSend sends a message to Slack based on `tokenCredentialId`

# Risks and mitigations

- The selectors of elements used in the test scenarios might stop working (in case the implementation of said elements changes).
    - The test engineer has to update the selectors.

- The tests rely on certain data being present in the test database.
    - If the data in the database change, the test engineer has to update the tests accordingly.

- The tests also rely on certain data *not* being present in the test database.
    - It is necessary to choose data which are very unlikely to already exist. If the tests fail, it's also necessary to make sure that the data wasn't left over from the previous test run (i.e. their deletion failed).

- A real person has provided their username and password, which is stored in plain text.
    - Test account would be nice. However, it needs to be connected to production (to load data from it). Such an account would count as another employee and mess up business intelligence data. It's unknown how difficult it would be to exclude the test account from the BI database.

- The password of the account used in the tests might expire.
    - The test engineer has to update the password after creating a new one. In case a separate test account was created, it could have a non-expiring password.

- The tests are only run with Admin permissioned account. Therefore, test scenarios with only Employee level of permission are missing.
    - It would be good to add tests which make sure that Employee can't access admin-only features.

# Contribute
Contact:

Nikola Šenovský - Test Engineer | senovsky@gmail.com | github.com/senovsky
