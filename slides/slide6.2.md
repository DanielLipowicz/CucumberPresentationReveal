# Flickering scenarios

Caused by:
* Shared Environments
* Leaky Scenarios
* Race Conditions and Sleepy Steps
Note:
Niestabilość testów może być spowodowana
* Współdzielonym środowiskiem
* System nie zdązył przywrócić swojego stanu pomiędzy poszczególnymi wykonaniami. 
       * Ewentualnie scenariusze są „złańcuchowane” przez co nie dokończenie z powodzeniem pierwszego z nich oblewa wszystkie następne
* Kroki testu/odpowiedi systmeu są wykonywane asynchronicznie i „ścigają się ze sobą” co powoduje losowy negatywny wynik testu – należy zaimplementować dodatkowe warunki na podstawie wiedzy o systemie

