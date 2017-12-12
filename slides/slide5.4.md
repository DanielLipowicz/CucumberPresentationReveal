#Bad Example

```gherkin
Scenario​: Check inbox
​ 	  Given a User ​"Dave"​ with password ​"password"​
​ 	  And a User ​"Sue"​ with password ​"secret"​
​ 	  And an email to ​"Dave"​ from ​"Sue"​
​ 	  When I sign in as ​"Dave"​ with password ​"password"​
​ 	  Then I should see 1 email from ​"Sue"​ in my inbox ```

Note:
* W teście występują wyrażenia które są nie istotne dla czytającego tekst

