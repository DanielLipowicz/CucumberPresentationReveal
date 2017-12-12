#Bad Example

```gherkin
Scenario Outline: Eating and adding
  Given there are <start> cucumbers
  When I <do> 5 cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | do    | left |
    |  12   | eat   |  7   |
    |  20   | add   |  24  |
```

Note: 
* zły przykład ze względu na dość niewidoczne rozwiązanie na niższym poziome 
* spójrzmy na przykład sandbox

