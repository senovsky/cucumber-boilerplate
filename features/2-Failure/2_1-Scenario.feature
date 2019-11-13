Feature: Failing Scenario
    As a Developer in Test
    I want to test if the framework WebdriverIO can open a website

    Scenario: open a website
        Given I open the url "http://example.com/"
        Then  I expect that element "div h1" contains the text "Eample Domain"
