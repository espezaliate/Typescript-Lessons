# Warsztaty TypeScript
![img](https://camo.githubusercontent.com/a59f76be953fd41c8d58faf7f579e08cb1e90ffb3aa957b8592103d13f5ea112/68747470733a2f2f696e666f736861726561636164656d792e636f6d2f77702d636f6e74656e742f7468656d65732f496e666f53686172652f646973742f696d672f7376672f6c6f676f2e737667)

## Organizacja
Warsztat jest podzielony na 3 moduły:
1. TypeScript - podstawy typowania
1. TypeScript - tworzenie modułów od podstaw
1. TypeScript - aplikowanie typów na zastanym kodzie

Każdy z modułów zawiera prezentację o tej samej nazwie w folderze:
```
presentation
```
Każdy slajd prezentacji będziemy rozwijali podczas warsztatu.

Repozytorium zawiera foldery snippets, exercises, examples które będziemy używali podczas omawiania prezentacji.

## TypeScript wprowadzenie
TypeScript rozszerza JavaScript o możliwość typowania. Dzięki czemu jesteśmy w stanie wyłapać więcej błędów zanim oprogramowanie trafi na produkcję.

### Co nam daje typescript
1. Ułatwia kontrolę nad aplikacją
1. Większa czytelność kodu
1. Wymusza mniejsze funkcje
1. Podpowiedzi w edytorze kodu
1. Sprawdza poprawność typów podczas kompilacji
1. Każdy kod JS jest prawidłowym kodem TS
1. TS finalnie jest kompilowany do JS

### Jakie narzuca utrudnienia
1. Zwalnia czas wydawania oprogramowania
1. Dodatkowa konfiguracja przy starcie projektu

### Konfiguracja środowiska
Instalacja
```
npm i -D typescript
```

Komenda do uruchomienia
```
./node_modules/.bin/tsc index.ts
```

Aby uruchomienie w trybie obserwacji dodajemy flagę
```
--watch
```

## Przydatne linki
[Dokumentacja TS](https://www.typescriptlang.org/docs/)

[Ćwiczenia z TS](https://typescript-exercises.github.io/)

[Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

[Playground](https://www.typescriptlang.org/play)

[Types Or Interfaces](https://github.com/typescript-cheatsheets/react#types-or-interfaces)

[React Typescript](https://create-react-app.dev/docs/adding-typescript/)

[Migracja z JS na TS](https://medium.com/opensanca/migrating-from-js-to-ts-cra-b5f679086c5a)