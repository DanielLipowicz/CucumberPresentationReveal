## How Cucumber Works?

```gherkin
Feature: Sign up

Sign up should be quick and friendly

Scenario: Successful sign up

New users should get a confirmation email and be greeted 
personally by site once signed in.

Given I have chosen to sign up
When I sign up with valid details
Then I should receive a confirmation email
And I should see a personalized greeting message

```
Note:
* Treści pisane językiem naturalnym nazwyane są Feature
* Składają sie ze scanariuszy testowych
* Scenariusze składają się ze Stepów 