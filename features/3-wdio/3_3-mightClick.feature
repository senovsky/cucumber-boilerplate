Feature: Successful Scenario
    As a Developer in Test
    I want to test if the framework WebdriverIO can verify inexistence of an element

    # Scenario: open a website
    #     Given I open the url "https://demoqa.com/tooltip-and-double-click/"
    #     When  I move to element "div.tooltip"
    #     Then  I expect that element "span.tooltiptext" is displayed
    #     Then  I might click on the element "span.tooltiptext"
    #     When  I move to element "h1.entry-title"
    #     Then  I expect that element "span.tooltiptext" is not displayed
    #     Then  I might click on the element "span.tooltiptext"
    #     When  I pause for 2222ms

    Scenario: might click ".ant-input-clear-icon"
        Given I open the url "http:///login"
        When  I type "username" to the input field "input[name='username']"
        When  I type "password" to the input field "input[name='password']"
        When  I click on the element "button[type='submit']"
        When  I click on the element "a[href='/clients']"
        When  I pause for 2222ms
        When  I might click on the element ".ant-input-clear-icon"
