# Slow features
Caused by:
* Race Conditions and Sleepy Steps
* Lots of Scenarios
* Big Ball of Mud

Note:
*E2E Race Conditions wynika z pracy dwóch równoległych systemów

* Duża ilość scenariuszy do przetestowania - tą liczbe można zredukować poprzez odpowiednią analizę kodu. Przetrzymywanie kodu testów wraz z kodem aplikacji oraz odpowiednia organizacja kodu może pomóc w utrzymaniu mniejszej ilości scenariuszy testowych z zachowaniem takiego samego pokrycia kodu. 

*  Big Ball of Mud to taka nasza testerska kulka którą toczymy, ponieważ nikt nie przyłożył się do designu 
* można powiedzieć że źle zadesignowane stystemy pracują powoli (ladowanie stron, czekanie na potwierdzenie itd.)
