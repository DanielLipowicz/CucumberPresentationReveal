#Bad Example

```gherkins
Scenario Outline: Eating
  Given there are <start> cucumbers
  When I <do> <quantity> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | do    |quantity | left |
    |  12   | eat   | 5  |  7   |
    |  20   | throw |5  |  15  |
```

Note:

	