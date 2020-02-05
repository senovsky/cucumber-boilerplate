Feature: Successful Scenario
    As a Developer in Test
    I want to test if the framework WebdriverIO can clear an input

    Scenario: open a website
        Given I open the url "https://ant.design/components/form/"
        When  I type "Frst txt" to the input field "input[placeholder='with allowClear']"
        When  I click on the element "li a[href='#components-form-demo-validate-static']"
        When  I type "First text" to the input field "input[placeholder='with allowClear']"
