# hp_terminal_game
"Harry Potter" game in terminal running on Node JS

## Plan

Nazwa: Harry Potter and the Terminal World

### Parametry wejściowe

Uzyjemy `yargs` zeby uruchamiac server lub client
parametry do uruchomienia: IP, port, imię, symbol

Na start serwera wygeneruj polecenie do przyłączenia

### Obsługa klawiatury

https://www.npmjs.com/package/observable


### Model do wyświetlenia

Model można załadować importując plik js, który eksportuje string, taki jak poniżej:

```
module.exports = `
---
| |
---
`
```

dodatkowo model może miec kolor i być przeźroczysty (ignoruj spacje)

### Wyświetlanie

przykład rysowania na terminalu (zdjęcia na tel)

Każdy typ elementu ma swój priorytet wyswietlania (100,200,300)

Czar uderzając mógłby powodować obiekt animacji

### Pętla gry

* Eventy przychodzące odkładamy na kolejkę (w tym eventy dołączenia)
* W pętli serwera przetwarzamy input (eventy, najpierw przystąpienia)
* W pętli serwera przetwarzamy logikę aplikacji
* Logika wykonuje operacje na obiekcie Game (znajdź obiekt), game zawiera metody markNew, markChanged, markRemoved (id elementu)
* przesłanie kolekcji markedElements do klientów

### Sleep

https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep

### Czary do przemyślenia 

Protego
Confringo
Expelliarmus
Avada kedavra
Protego maxima
Lumos
Episkey
Ferula
Immobilus?
Petrificus totalus
Rennervate

### Przemyślenia
    Na początku intro o tym jak HP dotknął komputera-swistoklika
    Przeszkody na początku odgradzają dwie strony
    werbalne czary nie zużywają many?
    
## Resources

https://github.com/indutny/node-ip
https://github.com/TooTallNate/keypress
https://github.com/yargs/yargs
https://www.npmjs.com/package/observable
https://gist.github.com/luciopaiva/e6f60bd6e156714f0c5505c2be8e06d8 // full socket.io example
https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/
