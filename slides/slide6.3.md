# Brittle features
Caused by:
* Fixture Data
* Duplication
* Leaky Scenarios
* Tester Apartheid
Note:
* Dane są zbyt skąplikowane do stworzenia - Przebieg scenariusza zalezy od danych testowych zaś te wpływają na wiele innych featurów – wynika z pominiecia testów gdzie wszystko jest tworzone przed i „sprzatane” po teście
* Duplikacja kodu występuje w Example przez co bardzo ciężko jest utrzymać wszystkie testy aktualne – czytelnośc kodu jest stawiana ponad nie powtarzanie się
* podobnie jak w przypadku niestabilnych testów dane testowe sa wynikiem bledu w poprzednich scenariuszach
* Tester nie posdiada odpowiedniego wsparcia w zespole developerskim przez co brakuje mu odpowiedniej wiedzy technicznej do zaimplementowania wszystkich testów
