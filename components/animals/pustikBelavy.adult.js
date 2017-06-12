import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pustikBelavy/01.jpg'),
  require('../../images/animals/pustikBelavy/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pustikBelavy/01-thumb.jpg'),
  require('../../images/animals/pustikBelavy/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Puštík bělavý (lat. <Text style={styles.italic}>Strix uralensis</Text>) je sova, která se dožívá až 25&nbsp;let. Dorůstá 59&nbsp;centimetrů a má nápadný, relativně dlouhý ocas. Rozpětí jeho křídel dosahuje obvykle 120&nbsp;centimetrů.
        </AnimalText>
        <AnimalText>
        Jeho peří je světle šedé, oči jsou malé a tmavé. Samec a samice se od sebe barevně neliší, samice je však mohutnější.
        </AnimalText>
        <AnimalText>
        Většinou loví v&nbsp;noci, někdy i&nbsp;ve dne, pokud má mláďata, je aktivní spíše ve dne. Loví tak, že neslyšně číhá ve větvích stromů, jakmile zpozoruje kořist, okamžitě se na ni vrhne a drapne ji do svých silných drápů. Svou kořist si ale odnáší v&nbsp;zobáku.
        </AnimalText>
        <AnimalText>
        Vytváří monogamní páry na celý život. Páry jsou také věrné svému teritoriu, které neopouští ani v&nbsp;letech, kdy je nedostatek potravy. Potravou mu jsou myši a další hlodavci, ptáci, obojživelníci a hmyz.
        </AnimalText>
        <AnimalText>
        Hnízdí v&nbsp;dutinách stromů nebo starých hnízdech dravců, občas ve skalních štěrbinách a budovách. Samice obvykle snese 2–6 bílá vajíčka, na kterých sama sedí po dobu 27–29&nbsp;dní. Mláďata krmí asi 5&nbsp;týdnů, po vylétnutí z&nbsp;hnízda své děti ještě asi měsíc přikrmuje. 
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Obývá především tajgu od Norska až po Japonsko. Tento druh puštíka je v&nbsp;České republice kriticky ohroženým druhem. Přirozeně hnízdí v&nbsp;Beskydech nebo na Šumavě.
        </AnimalText>
        <AnimalText>
        Puštík bělavý má velmi specifický hlasový projev, a to „vůhu-hu-hu“, s&nbsp;důrazem na první slabiku. Je ovšem velmi variabilní, jelikož je ovlivňován řadou různých faktorů – například klimatickými vlivy. Výrazně se mění i&nbsp;v&nbsp;jednotlivých letech. Nejvíce se puštík ozývá na jaře a na podzim.
        </AnimalText>
        <AnimalText>
        V němčině se mu říká <Text style={styles.italic}>Habichtskauz</Text>, pravděpodobně podle toho, že má let podobný letu jestřába lesního (něm. <Text style={styles.italic}>Habicht</Text>). Slováci jej zase pojmenovali sova dlhochvostá podle délky ocasu. Tato sova dokáže urputně bránit své hnízdo před vetřelci, tedy i&nbsp;lidmi, proto se jí ve Švédsku říká <Text style={styles.italic}>„slaugula“</Text> neboli útočná sova. Právě ze Švédska k&nbsp;nám byl 5.&nbsp;června 2014 přivezen sameček Oscar. Samička pochází z&nbsp;finského Ranua Wildlife Park a byla k&nbsp;nám přivezena 23.&nbsp;dubna 2015.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
