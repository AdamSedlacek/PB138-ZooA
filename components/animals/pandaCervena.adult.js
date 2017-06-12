import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pandaCervena/01.jpg'),
  require('../../images/animals/pandaCervena/02.jpg'),
  require('../../images/animals/pandaCervena/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pandaCervena/01-thumb.jpg'),
  require('../../images/animals/pandaCervena/02-thumb.jpg'),
  require('../../images/animals/pandaCervena/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Když se řekne panda, každý si jistě představí velkého roztomilého medvěda černobílé barvy, jak sedí a spokojeně okusuje bambus.
        </AnimalText>
        <AnimalText>
          Když se řekne panda červená, obrázek se absolutně změní. Místo toho vám na mysli vytane malé zvířátko s&nbsp;rošťáckým výrazem a dlouhatánským ocasem, které líně pospává vysoko v&nbsp;koruně stromu.
        </AnimalText>
        <AnimalText>
          Stejné jméno – a přitom takové rozdíly! Obě pandy sice patří do stejného podřádu psotvárných, ale zatímco panda velká je medvědovitá šelma, panda červená se řadí k&nbsp;malým pandám – obě k&nbsp;sobě tedy mají stejně daleko jako třeba k&nbsp;psovi nebo mroži. Stejné jméno si vysloužily jen podobným způsobem života.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Panda červená žije v&nbsp;horských lesích východního Himálaje (Nepálu, Indie, Myanmaru, Bhútánu a Číny), a to ve výškách i&nbsp;nad 4000 m&nbsp;n.&nbsp;m. Nejraději šplhá v&nbsp;korunách vysokých stromů a tráví tam většinu dne. Udržovat rovnováhu ve větvích jí pomáhá její dlouhý ocas. Za svítání či za soumraku, kdy je nejaktivnější, se pak dolů vypravuje především kvůli potravě. Ze stromu slézá hlavou dolů, což je pro zvíře její velikosti docela neobvyklé. Pomáhají jí v tom zpola zatažitelné drápy. Panda červená si ráda pochutná na ovoci, vejcích nebo drobných obratlovcích. Nejraději však má bambus, denně sní až čtyři kilogramy bambusových výhonků nebo 1,5&nbsp;kilogramu bambusových listů. Manipulaci s&nbsp;bambusovými stébly jí usnadňuje kostěný výrůstek na zápěstí, fungující jako nepravý šestý prst.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Pandy červené jsou samotáři, setkávají se jen v&nbsp;období páření. Své úmysly si sdělí snadno – prostě na sebe zapískají. Samice jsou březí čtyři měsíce, a poté rodí jedno až čtyři mláďata, o&nbsp;která se celý následující rok starají. Dožívají se až 14&nbsp;let. Bohužel vysoká úmrtnost mláďat a další faktory, jako je například kácení lesů a lov, vedou k&nbsp;tomu, že se pandy červené řadí mezi ohrožené. Za poslední dvě desetiletí klesla jejich populace o&nbsp;50&nbsp;% a tento trend se i&nbsp;nadále zhoršuje.
        </AnimalText>
        <AnimalText>
          V&nbsp;naší zoo chováme dvě pandy červené. Pandora se narodila v&nbsp;srpnu roku 2012 v&nbsp;norském Kristiansandu (stejně jako náš rosomák Ivan) a do Brna přijela v&nbsp;říjnu 2013. Huan pochází z&nbsp;rakouské Zoo Linz, narodil se v&nbsp;červnu 2013 a v&nbsp;Brně je od poloviny roku 2014.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
