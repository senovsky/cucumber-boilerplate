Feature: Successful Scenario
    As a Developer in Test
    I want to test if the framework WebdriverIO can verify inexistence of an element

    Scenario: open a website
        Given I open the url "https://demoqa.com/tooltip-and-double-click/"
        When  I move to element "div.tooltip"
        Then  I expect that element "span.tooltiptext" is displayed
        When  I move to element "h1.entry-title"
        Then  I expect that element "span.tooltiptext" is not displayed
        When  I pause for 2222ms