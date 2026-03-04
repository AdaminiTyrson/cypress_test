# Cypress Test – CSFD
## Popis úkolu
Cílem úkolu bylo vytvořit automatizovaný test webové aplikace, který ověří, že po změnách na backendu zůstaly zachovány základní funkce a vzhled aplikace.
Pro testování byla zvolena veřejně dostupná webová aplikace csfd.cz.
Projekt obsahuje dva typy testů:
- test1  –smoke test využívající HTTP request
- test_interakcni – test simulující chování uživatele (vyhledávání filmu a otevření registrace)
---
Test1 ověřují:
- dostupnost homepage
- existenci vyhledávání
- vyhledání filmu
- otevření registrační stránky
---
Test_interakcni:
Druhý test simuluje chování uživatele:
1. otevření homepage
2. vyhledání filmu
3. otevření detailu filmu
4. otevření registrační stránky
Test využívá příkazy: cy.visit(), cy.get(), cy.contains()
---
Problém s cy.visit()
V testovacím prostředí se při použití příkazu cy.visit() Cypress zasekával při načítání externích webových stránek.  
Cypress čeká na událost `window.load`, která ale nepřichází.
Výsledkem bylo, že test zůstal ve stavu: Running: regression.cy.js , a dále nepokračoval.
---
Řešení
Pro stabilní ověření dostupnosti aplikace byl použit příkaz: cy.request() ,a dále nepokračoval.
Ten provádí HTTP request přímo na server a umožňuje ověřit:
- HTTP status (např. 200 OK)
- obsah HTML odpovědi
---
