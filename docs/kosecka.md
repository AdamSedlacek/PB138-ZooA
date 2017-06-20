# Závěrečná zpráva k projektu Zoo
**Title:** Rozšíření mobilní aplikace pro ZOO
            Implementováno v React Native
            Tým A<br xmlns="http://www.w3.org/1999/xhtml"/>
**Author:** Klára Košecká<br xmlns="http://www.w3.org/1999/xhtml"/>
**Organization:** MUNI<br xmlns="http://www.w3.org/1999/xhtml"/>

## Zpráva

### Záverečná správa
- Pri práci na projekte som sa podieľala na tvorbe prepojenia 
aplikácie so sociálnymi sieťami. Na začiatku som spolu s ostatnými 
členmi týmu naštudovala aktuálny kód aplikácie. Prešli sme si úvod 
do React Native a spoločne sme vytvorili 3 komponenty - tlačítka pre 
jednotlivé rozšírenia aplikácie.
        
- Ako prepojenie sociálnych sietí som naimplementovala zdieľanie 
stránky zvieraťa na Facebook stránku používateľa, po kliknutí na 
tlačítko FBShareButton.js. Bolo potrebné pridať a 
nakonfigurovať Facebook SDK pre Android projekt v React Native, 
získať Facebook App ID a prepojiť ho s aplikáciou. Samotné zdieľanie 
na Facebook je implementované použitím triedy ShareDialog 
importovanej z react-native-fbsdk modulu. Metódam tejto triedy sa 
ako atribút poskytne nami definovaný obsah v podobe JSON objektu.
        
- Druhou časťou prepojenia so sociálnymi sieťami bolo vytvorenie 
odkazov na sociálne siete, na ktorých má Zoo Brno založený účet ako 
aj na samotné webové stránky Zoo Brno. Sociálne siete sú odkazované 
z príslušnej ikony danej sociálnej siete na stránke s informáciami 
Pro návštevníky, ktorá je prístupná z hlavného menu aplikácie.
