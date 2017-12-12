# Arguments in gherkins
## Flexibility

```gherkin
Scenario Outline: Eating
  Given there are <start> cucumbers
  When I eat <quantity> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | quantity  | left |
    |  12   |     5     |  7   |
    |  20   |     5     |  15  |
```

Note:
* przykład użycia scenario outline i testu data driven
	* oznacza to ze scenariusz testowy powtórzy sie dwukrotnie z innym zestawem danych
* Dane w tym przypadku zostały zaciemnione
	
