import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kajmanekTrpaslici/01.jpg'),
  require('../../images/animals/kajmanekTrpaslici/02.jpg'),
  require('../../images/animals/kajmanekTrpaslici/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kajmanekTrpaslici/01-thumb.jpg'),
  require('../../images/animals/kajmanekTrpaslici/02-thumb.jpg'),
  require('../../images/animals/kajmanekTrpaslici/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Vážení a milí, vítám vás u&nbsp;terária kajmánků trpasličích. Jestli si myslíte, že před vámi budou proskakovat obručemi, musím vás zklamat. Když totiž tihle plazi zjistili, jak moc je návštěvníci obdivují, samou radostí strnuli.
        </AnimalText>
        <AnimalText>
          Vypadají skoro jako exponáty v&nbsp;muzeu, viďte? Pojďte si je prohlédnout trochu lépe. Nejprve se podívejte na jejich velikost. Kajmánci trpasličí svojí délkou obyčejně nepřekročí ani 150&nbsp;cm, což z&nbsp;nich dělá jeden z&nbsp;nejmenších druhů krokodýlů.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Dále se zaměřte na typické rysy kajmánků, kterými jsou hnědé oční duhovky a zkostnatělá oční víčka, jimž podobná nalezli archeologové jen u&nbsp;některých dinosaurů. Krokodýli kdysi opravdu obývali planetu současně s&nbsp;dinosaury, a proto se jim někdy říká živoucí fosilie. Kajmánci mají dokonce ve svém latinském názvu slovo <Text style={styles.italic}>paleosuchus</Text>, které znamená něco jako prastarý krokodýl.
        </AnimalText>
        <AnimalText>
          Stále zoufáte, že se kajmánci moc nehýbou? Buďte rádi, že máte příležitost je vůbec vidět. V&nbsp;rodné Jižní Americe se často schovávají do podzemních doupat v&nbsp;okolí zalesněných řek a jezer. Sotva byste našli jiný druh krokodýla, který by se tak rád zdržoval jinde než ve vodě.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Prohlídka terária se pomalu chýlí ke konci. Nezbývá než konstatovat, že přes všechny spojitosti s&nbsp;dinosaury nejsou kajmánci žádné vykopávky. Chovat je doma mohou jen ti nejotrlejší. Na zádech i&nbsp;ocasu se kajmánci vyzbrojili kostěnými šupinami. Když se rozhodnou zaútočit, dost to bolí. Kořist, jíž jsou většinou ryby, polykají celou nebo po velkých kusech. Možná se teď ptáte, proč tady v&nbsp;zoo nesežerou kajmánci piraně, které s&nbsp;nimi sdílí terárium. Odpověď je jednoduchá – piraně jsou moc velké, mrštné a kajmánci pravidelně dostávají o&nbsp;dost lepší pochutiny.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
