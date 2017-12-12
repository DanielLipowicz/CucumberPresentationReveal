#Better Example

```gherkin
Scenario​: Check inbox
​ 	  Given a User ​"Dave"​
​ 	  And a User ​"Sue"​
​ 	  And an email to ​"Dave"​ from ​"Sue"​
​ 	  When I sign in as ​"Dave"​
​ 	  Then I should see 1 email from ​"Sue"​ in my inbox
```

Note: 
* Udało się usunąć zmienną hasło ze scenarisuza testowego, ale wciąż jest możliwość udoskonalenia testu
