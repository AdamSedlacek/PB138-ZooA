import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/krkavecVelky/01.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/krkavecVelky/01-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Nazdar krasavci!
        </AnimalText>
        <AnimalText>
          Jistě jste zdatní přírodovědci, přesto vás musíme upozornit, že ne každý zná naše opravdové jméno. Takže aby bylo jasno – nejsme havrani, protože ti jsou oproti nám menší a v&nbsp;zimě je někdy potkáte ve městech. Nejsme ani vrány. Jsme krkavci. Brázdíme lesy i&nbsp;otevřená prostředí skoro celé severní polokoule, a tak se občas objevíme i&nbsp;v&nbsp;těch českých.
        </AnimalText>
        <AnimalText>
          Jeden takový hluboký hvozd obýval náš prapradědeček Krako. Už od malička se chtěl stát rytířem. Neohroženě se pral o&nbsp;každou kořist, zobákem naporcoval kdejakou mršinu a k&nbsp;tomu všemu byl vysoce inteligentní. Říká se, že dokonce uměl napočítat do osmi!
        </AnimalText>
        <AnimalText>
          Žádná z&nbsp;těchto schopností mu bohužel nezajistila to, po čem toužil nejvíc – správný rytíř musel patřit k&nbsp;nějakému řádu. Přijímací zkoušky se však vyhlašovaly jen do Řádu pěvců, kde na jeho krákání nebyl nikdo zvědav. Krako se rozhodl, že se do přijímaček prostě zpívat naučí.
        </AnimalText>
        <AnimalText>
          Sehnat v&nbsp;lese učitele nebylo jednoduché. Zvířata se krkavců bála, protože je často viděla na popravištích. Krako nechtěl nikoho vyděsit, a tak nakonec přestal hledat ptačího učitele a začal tajně poslouchat turisty. Člověčí hlas ho fascinoval.
        </AnimalText>
        <AnimalText>
          Zanedlouho přišel den přijímacích zkoušek. Krako stanul na větvi před odbornou porotou z&nbsp;Řádu pěvců a spustil: „Hele, hříbek! Pojďme doprava. Tady je krásně!“ Sice to bylo spíš mluvení než zpěv, ale porota byla ohromená. Ocenila Krakovu snahu a do Řádu pěvců ho přijala.
        </AnimalText>
        <AnimalText>
          Krako byl od té doby respektovaný rytíř. Odháněl turisty od zvířecích obydlí – vždycky se někam schoval, pronesl naučenou větu a lidé šli tam, kam je navedl. Za odměnu si mohl vystlat hnízdo jemným mechem a prvotřídním blátem, které zajistily pohodlí pro šest krkavčích ptáčat.
        </AnimalText>
        <AnimalText>
          Vědci od té doby říkají, že krkavci jsou dokonce největší ptáci patřící do řádu pěvců. Někteří se naučí napodobovat řeč nebo zpěv lidí víc, jiní se jen schovávají v&nbsp;přírodě, sedí na rameni čarodějnicím nebo radostně krákají v&nbsp;zoo. My krkavci z&nbsp;brněnské zoo jsme na svoje krákání pyšní. Když tu u&nbsp;nás chvilku počkáte, určitě vám svůj hlas předvedeme.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
