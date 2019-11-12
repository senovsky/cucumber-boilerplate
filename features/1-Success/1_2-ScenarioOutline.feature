Feature: Successful Scenario Outline
    As a Developer in Test
    I want to search for repository
    So that I can use it in my future tests

    Scenario: open URL
        Given I open the url "https://github.com/"
        Then  I expect the url to contain "github.com"
        And   I expect that the title is "The world’s leading software development platform · GitHub"

    Scenario Outline: search for <repoName> repository
        Given I open the url "https://github.com/search"
        And   the element "[placeholder='Search GitHub']" not contains any text
        And   I set "<repoName>" to the input field "[placeholder='Search GitHub']"
        When  I press "Enter"
        Then  I expect that element ".header-search-input" contains the text "<repoName>"
        And   I expect that container ".repo-list-item:first-child" contains the text "<description>"

        Examples:
            | repoName                  | description                                                                                             |
            | webdriverio               | Next-gen WebDriver test automation framework for Node.js                                                |
            | wdio-chromedriver-service | WebdriverIO service to start & stop ChromeDriver                                                        |
            | chai                      | BDD / TDD assertion framework for node.js and the browser that can be paired with any testing framework |
