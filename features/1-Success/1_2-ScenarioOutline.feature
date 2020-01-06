Feature: Successful Scenario Outline
    As a Developer in Test
    I want to check the contents of a website

    Scenario: open URL
        Given I open the url __example.com__
        Then  I expect the url to contain "example.com"
        And   I expect that the title is "Example Domain"

    Scenario Outline: expect <text> to be displayed
        Given I open the url __example.com__
        Then  I expect that element __p containing <text>__ is displayed

        Examples:
            | text   |
            | This   |
            | domain |
            | is     |