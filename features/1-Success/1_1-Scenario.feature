Feature: Successful Scenario
    As a Developer in Test
    I want to test if the github.com failed login screen displays an error

    Scenario: login with fake credentials
        Given I open the url "https://github.com/login"
        When  I set "marketionist" to the input field "#login_field"
        And   I set "1111" to the input field "#password"
        And   I click on the button "[value='Sign in']"
        Then  I expect that element "#js-flash-container .flash-error" contains the text "Incorrect username or password"
