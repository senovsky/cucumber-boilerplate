Feature: Successful Scenario
    As a Developer in Test
    I want to test if the framework WebdriverIO can open a website

    Scenario: open a website
        Given I open the url "http://example.com/"
        Then  I expect that element __h1__ contains the text "Example Domain"
