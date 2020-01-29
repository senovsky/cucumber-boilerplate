Feature: Successful Scenario
    As a Developer in Test
    I want to test if the framework WebdriverIO can clear an input

    Scenario: open a website
        Given I open the url "https://demoqa.com/html-contact-form/"
        When  I type "Frst nm" to the input field "input.firstname"
        When  I type "Last name" to the input field "input#lname"
        When  I type "First name" to the input field "input.firstname"
        When  I pause for 2222ms
