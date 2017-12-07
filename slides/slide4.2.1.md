#Good Example

```gherkins
Scenario Outline: Eating
  Given there are <start> cucumbers
  When I eat <eat> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | eat | left |
    |  12   |  5  |  7   |
    |  20   |  5  |  15  |
```

Note:
* przykład użycia scenario outline i testu data driven
	* oznacza to ze scenariusz testowy powtórzy sie dwukrotnie z innym zestawem danych
* zawiera dobre praktyki 
	* zmienne wpływają bezpośrednio na wynik
	* wszystkie linie bedą prawdopodobnie kożystały z tej samej metody
	