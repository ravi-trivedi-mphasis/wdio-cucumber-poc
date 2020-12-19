Feature: Simple WDIO Cucumber Test

    Scenario: WDIO Cucumber Test
        Given I open the application
        When I click on link "a.button.hero-cta"
        Then Verify id "#introduction-to-the-angular-docs" is present
