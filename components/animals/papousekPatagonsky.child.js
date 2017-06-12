import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/papousekPatagonsky/01.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/papousekPatagonsky/01-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Hola kamarádi,
        </AnimalText>
        <AnimalText>
          jmenuji se papoušek patagonský a rád bych vám pověděl o&nbsp;sobě a svých kamarádech spoustu zajímavých věcí. Své jméno, patagonský, mám podle názvu země Patagonie, kde žijeme ve volné přírodě. Poletujeme si pustými, krásnými a otevřenými krajinami, rádi se usazujeme blízko písčitých a hlinitých řek. Když se tak rozhlížíme, uzobneme si nějaké semínko, pupen či zelený lístek, bobuli nebo obilí a v&nbsp;zoo dostaneme i&nbsp;piškot. To je dobrota! Ale sami nám piškoty nedávejte, mohli bychom vás klovnout. Navíc se lidí trochu bojíme, jsme raději ve svém hejnu. My jsme totiž velmi společenští a ukecaní, nejspíš nás uslyšíte. Zkuste si s&nbsp;námi povídat, třeba se od vás nějaké slovo naučíme. Lidé ale říkají, že nám to moc nejde, tak se budete muset snažit.
        </AnimalText>
        <AnimalText>
          A když už nás tak pěkně sledujete, podívejte se, jak jsme fikaně zbarvení. Hlavu máme olivovou, krk, hrdlo a hruď šedé. A teď barevný zvrat – křídla máme olivově zelená s&nbsp;modrými letkami a výrazně a nápadně žlutý kostřec nám doplňují krásně oranžové až červené kalhotky. A nohy? Ty jsou růžové. Můžete nás pozorovat i&nbsp;v&nbsp;zimě, protože jsme papoušci otužilí.
        </AnimalText>
        <AnimalText>
          V&nbsp;čem jsme ale jedineční, je styl stavby našeho hnízda. My si totiž vyhrabeme noru, která ústí ve svislé stěně nějakého břehu a může být až metr dlouhá. Na konci této chodby si vyhloubíme důlek a sneseme do něho vajíčka. Pod zemí máme i&nbsp;sousedy a společnými dveřmi můžeme procházet k&nbsp;různým chodbám. V&nbsp;činžáku jsou také jedny společné dveře a více bytů se sousedy. No a tyto chodby se různě propojují, takže vzniká takové malé bludiště.
        </AnimalText>
        <AnimalText>
          Tak zase příště, kamarádi.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
