Feature: Sandbox scenario - for cucumber presentation

 Scenario Outline: Eating
  Given there are <start> cucumbers
  When I <do> 5 cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | do    | left |
    |  12   | eat   |  7   |
    |  20   | add   |  15  |