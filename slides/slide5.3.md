 
```JavaScript
    When(/^I (\w+) 5 cucumbers$/, function (toDo) {
	switch (toDo) {
		case "eat":
			cucumbers -= 5;
			break;
		case "add":
			cucumbers += 5;
			break;
		//...
		//...
    }
})
```

Note:
* Uruchom test cucumber pokaż jak się wykonuje