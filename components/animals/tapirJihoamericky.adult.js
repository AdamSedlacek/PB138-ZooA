import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/tapirJihoamericky/01.jpg'),
  require('../../images/animals/tapirJihoamericky/02.jpg'),
  require('../../images/animals/tapirJihoamericky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tapirJihoamericky/01-thumb.jpg'),
  require('../../images/animals/tapirJihoamericky/02-thumb.jpg'),
  require('../../images/animals/tapirJihoamericky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Tapír je lichokopytník z&nbsp;čeledi tapírovitých. Původem je z&nbsp;Jižní Ameriky, kde žije v&nbsp;tropických deštných lesích. Tapír většinou žije samotářsky a je aktivní zejména v&nbsp;noci. Je velice plachý. Kvůli lovu a ztrátě přirozeného biotopu je klasifikováni jako zranitelný druh.
        </AnimalText>
        <AnimalText>
          Na první pohled vypadá tapír jako velké tmavé prase, ale jistě vás zaujala jeho hlava. Tapír má krátký pohyblivý chobot, kterým může lépe uchopit svou potravu. Nenechte se zmýlit, chobot tapíra neznačí příbuznost se slony.
        </AnimalText>
        <AnimalText>
          Chrup tapíra je podobný koňskému, uši jsou krátké a nepříliš pohyblivé a jeho ocas je tak malý, že ho můžete lehce přehlédnout.
        </AnimalText>
        <AnimalText>
          Na předních nohách má tapír čtyři prsty – tři jsou přibližně stejně velké, ale čtvrtý je menší a je umístěn na noze výše než ostatní prsty. Tapír na tento malý prst našlapuje pouze tehdy, když se pohybuje na měkké půdě. Na zadních nohách má prsty tři. Na všech nohách jsou pružné polštářky a všechny prsty jsou chráněny kopýtky.
        </AnimalText>
        <AnimalText>
          Existuje více druhů tapírů, nejlépe je rozpoznáte podle srsti. Tapír jihoamerický má srst světle šedou až hnědou. Oproti tomu například tapír středoamerický má lesklou srst zbarvenou tmavě hnědě až černě.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Strava tapíra je podobná jako u&nbsp;jiných býložravců. Jí výhonky, listy, plody i&nbsp;vodní rostliny. Ve volné přírodě byste na něj mohli narazit například v&nbsp;deštném lese, ale i&nbsp;v&nbsp;suchých lesích, křovinách nebo savanách a dalších oblastech. Když vyrazí za potravou, lze ho spatřit i&nbsp;na poli či na plantáži s&nbsp;kukuřicí nebo cukrovou třtinou.
        </AnimalText>
        <AnimalText>
          Samci tapíra jsou většinou velice agresivní a se samicemi se sdružují jen na pár dnů v&nbsp;období páření. Samice je březí 400&nbsp;dní a rodí jedno mládě.
        </AnimalText>
        <AnimalText>
          Mláďata tapíra vypadají podobně jako mláďata prasete divokého. Mají pruhovanou nebo skvrnitou srst, díky které nejsou ve vegetaci, skrze niž prosvítá světlo a střídá se se stíny, vidět. S&nbsp;matkou zůstávají jen rok po svém narození, ale dospívají až ve věku tří nebo čtyř let.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Tapíři se u&nbsp;nás v&nbsp;zoo dožívají až 35&nbsp;let, avšak ve volné přírodě umírají dříve. Důvodem mohou být, mimo jiné, predátoři, kteří se ve volné přírodě vyskytují. Přirozenými predátory tapíra jsou jaguáři, pumy a kajmani.
        </AnimalText>
        <AnimalText>
          Tak co? Zalíbili se vám tapíři, nebo pro vás stále budou jen těmi zvířaty s&nbsp;divnou tlamou?
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
