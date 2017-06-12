import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kunPrevalskeho/01.jpg'),
  require('../../images/animals/kunPrevalskeho/02.jpg'),
  require('../../images/animals/kunPrevalskeho/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kunPrevalskeho/01-thumb.jpg'),
  require('../../images/animals/kunPrevalskeho/02-thumb.jpg'),
  require('../../images/animals/kunPrevalskeho/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Počátek devatenáctého století. V&nbsp;rozlehlých mongolských stepích se pasou stáda divokých koní. Lidská civilizace je neohrožuje, jsou svobodní. Jsou národním pokladem, součástí kulturního dědictví Mongolů. Nemají se čeho bát.
        </AnimalText>
        <AnimalText>
          Uběhne však jen půl století a všechno se změní. Domovinu jim začínají narušovat lidé. A co hůř, domácí zvířata jim postupně zabírají zdroje pitné vody. Národní poklad už není pokladem, spíš hrstkou čítající pár desítek osamocených mincí v&nbsp;truhle.
        </AnimalText>
        <AnimalText>
          Nikdo už si pořádně nepamatuje, kdy divokého koně spatřil naposled. Svět se smiřuje s&nbsp;tím, že vyhynuli. Pak se však stane zázrak – ruský generál, cestovatel a geograf N.&nbsp;M.&nbsp;Prževalskij na svých cestách narazí na pár osamocených jedinců. Na připomínku této památné chvíle získávají divocí koně přívlastek Převalského.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Zanedlouho se začínají odchytávat a umisťovat do evropských zoologických zahrad. Cíl je jediný: zachránit tento téměř vyhynulý divoký druh. Padesát čtyři jedinců se zdá jako dostatečný základ pro plnění tohoto úkolu. Divocí koně však nejsou divocí pro nic za nic. Několik jich v&nbsp;zajetí uhyne, několik není schopno se rozmnožovat. Krize je čím dál tím hmatatelnější. Zbývá posledních 13&nbsp;jedinců a naděje na záchranu druhu rapidně klesají.
        </AnimalText>
        <AnimalText>
          V&nbsp;tuto chvíli je tedy zásadní zajistit co nejvíce potomků, tedy upřednostnit kvantitu nad kvalitou. Dlouhé roky se daří počet jedinců udržovat v&nbsp;počtu okolo tří desítek. Nově narozená mláďata zastupují uhynulé kusy, ale k&nbsp;většímu nárůstu počtu nedochází. Je konec 50.&nbsp;let 20.&nbsp;století a odborníci si uvědomují tu strašnou skutečnost – jestli teď do své práce nevloží všechny síly, co mají, příští generace bude znát divoké koně už jen z&nbsp;vyprávění. Toto uvědomění vede k&nbsp;tomu, že o&nbsp;pouhých 40&nbsp;let později díky spolupráci odborníků a zoologických zahrad po celém světě překročí počet divokých koní chovaných v&nbsp;zajetí hranici 1600&nbsp;jedinců. Nastává čas zaměřit se na kvalitu, sepisují se plemenné knihy.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jelikož divocí koně patří především do divočiny, začínají se pořádat reintrodukční projekty, které mají za cíl vrátit koně Převalského do jejich domoviny. Poprvé se tak stává v&nbsp;roce 1991 na území Číny, v&nbsp;místech, která původně divocí koně obývali. Mongolové chtějí podpořit svou národní tradici a přispět k&nbsp;zachování kulturního dědictví své země, proto také na svých územích zřizují aklimatizační stanice a v&nbsp;roce 1997 vypouští do přírody, do míst, kde byli naposled spatřeni, první jedince koní Převalského. Již o&nbsp;dva roky později se v&nbsp;divočině rodí první hříbata.
        </AnimalText>
        <AnimalText>
          Není to tak dávno, co měl svět pouhých třináct posledních koní Převalského.
        </AnimalText>
        <AnimalText>
          Chybělo tak málo… a divoké koně bychom znali už jen z&nbsp;pohádek.
        </AnimalText>
        <AnimalText>
          Stačilo tak málo… a můžeme je potkat v&nbsp;zoologických zahradách i&nbsp;ve volné přírodě.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
