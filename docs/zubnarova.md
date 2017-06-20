# Závěrečná zpráva k projektu Zoo

## Zpráva

### Projekt: Rozšírenie mobilnej aplikácie pre Zoo Brno - Team A

- Náš tým bol jeden z dvoch týmov, ktoré sa podielali na pridaní
nových funkcionalít do už existujúcej aplikacie pre brnenské zoo. Táto
aplikácia napísana prevažne v React Native bola vyvynutá Marekom Grácom,
ktorý bol zároveň aj zadávateľom nášho projektu.

- Zadanie nebolo na začiatku presne špecifikované, čo nám umožnilo si
vybrať z možností, ktoré nám boli ponúknuté vrámci počiatočných
konzultácií k projektu. Konečné rozhodnutie padlo na implementáciu
tlačítok, ktoré umožnia prehrať ako zvuk, ktorý zvieratá vydávajú, tak aj
nahovorený text. Ďalšou časťou zadania bolo napísať v Jave funkcionalitu,
ktorá zamedzí prehravaniu daných zvukových súborov pokiaľ uživateľ nemá
zapojené sluchatká. Treťiu a zároveň poslednú časť zadania sme si vybrali
prepojenie aplikácie so sociálnymi sieťami.

### Priebeh projektu a moj prínos

- Začiatky práce na projektu nám zo začiatku skomplikovalo obťiažne
rozbehnutie samotnej aplikacie v android studiu. Bolo tu poznať, že ani
jeden člen týmu nemal skúsenosti s vyvojom mobilných aplikácii, ale
nakoniec sme prekonali všetky počiatočné prekážky.

- Po čase sme si rozdelili ulohy v týme tak, aby každému pripadlo
približne rovnako veľa práce na projektu. Na mňa pripadla implementácia
tlačítok, ktoré prehrávajú zvuk. Zo začiatku sa uvažovalo o dvoch
súboroch, ktoré mali reprezentovať každé jedno tlačítko zvuku zvlášť,
ale po nejakej dobe, počas ktorej sa mi podarilo sa viac zorientovať v
implementácii už vyvynutej aplikácie a po oboznámení sa možnosťami,
ktoré React ponúka, sa mi podarilo funkconalitu naimplementovať tak, aby
som vytvorila jeden súbor soundButton.js, ktorý
reprezentuje všeobecné tlačítko, ktorý prehráva zvuk.

- Na prehrávanie zvuku som použila modul react-native-sound a
podarilo sa mi taktiež ošetriť, aby sa vrámci otvoreného detailu
zvieraťa neprehralo viac zvukových stop zároveň.

- Tlačítko ma tiež implementované 2 rozne notifikacie. K týmto
notifikáciám som použila modul, ktorý už bol vrámci aplikácie použitý
inde. Prvá notifikácia sa objaví po prvom stlačení tlačítka v konkrétnom
detaily zvieraťa a uporozňuje užívateľa, aby použil sluchatká, lebo
hlasitý odposluch može rušiť zvieratá. Túto funkcionalitu som navrhla
ako alternatívu k tomu, že sa nám nepodarilo prepojiť časť napísanu v
Jave, ktorá má zabrániť prehravaniu zvuku bez zapojených slúchatiek a
samotné prehravanie zvuku napísané v Reacte. Druha notifikácia sa
objaví, keď sa uživateľ snaží prehrať zvuk z roznych tlačítok súčasne a
oznámi mu, aby najskor ukončil prehrávanie už spusteného zvuku.

### Celkové zhodnotenie projektu

- Komunikácia a spolupráca vrámci nášho týmu bola počas projektu na
dobrej úrovni napriek tomu, že bol zostavený z úplne neznámych ľudí.
Samotný projekt bol zaujímavý mimo iné aj v tom, že sa jedná o živú
aplikáciu, ktorá je reálne používaná verejnosťou. Prínosná bola i
možnosť zoznámiť sa s novým programovacím jazykom a s vývojom mobilných
aplikácii.
