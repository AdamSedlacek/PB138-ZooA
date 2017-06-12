import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/leskoptevTribarva/01.jpg'),
  require('../../images/animals/leskoptevTribarva/02.jpg'),
  require('../../images/animals/leskoptevTribarva/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/leskoptevTribarva/01-thumb.jpg'),
  require('../../images/animals/leskoptevTribarva/02-thumb.jpg'),
  require('../../images/animals/leskoptevTribarva/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Dovolte, abychom se představili. Jsme tři ptáci leskoptváci. Žijeme tady v&nbsp;zoo už nějaký pátek, ale všechny leskoptve pocházejí z&nbsp;Afriky. Jestli jste Afriku někdy viděli na mapě, víte, že má na pravé straně takový roh, úplně jako nosorožec. A na tomhle rohu my žijeme. Nepatříme mezi vodní ptáky, máme raději sucho. Často se uhnízdíme taky u&nbsp;lidských sídel. Dobře se nám tam totiž hledá potrava. Krmíme se hlavně hmyzem a různými bobulemi.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Když jste slyšeli jméno leskoptev, možná vám to připomnělo koroptev. To je ale podobnost úplně náhodná! My jsme menší a barevnější. Měříme necelých 20&nbsp;centimetrů a vážíme 60&nbsp;gramů. To je jako napůl snězený sáček bonbonů.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Ačkoliv tady v&nbsp;zoo jsme samí kluci, máme i&nbsp;samičky. Ty jednou za čas nakladou (obvykle čtyři) vejce, z&nbsp;nichž se po dvou týdnech vylíhnou malá leskoptvata. Hnízda si stavíme v&nbsp;trnitých větvích – a pokud je těch trnů málo, nataháme si kolem hnízda další větve, abychom byli pořádně chránění. Někdy se nám ale hnízdo stavět nechce. Když nás takhle přemůže lenost, kladou naše samičky vajíčka do hnízd jiných ptáků, jmenují se snovači. U&nbsp;vás takhle kladou vajíčka do cizích hnízd kukačky. My jsme v&nbsp;něčem ale trochu zákeřnější. Když by se totiž naše vajíčka do hnízd nevešla, prostě cizí vajíčka vyhážeme ven.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
