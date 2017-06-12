import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jaguarundi/01.jpg'),
  require('../../images/animals/jaguarundi/02.jpg'),
//  require('../../images/animals/jaguarundi/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jaguarundi/01-thumb.jpg'),
  require('../../images/animals/jaguarundi/02-thumb.jpg'),
//  require('../../images/animals/jaguarundi/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Jaguarundi, latinsky <Text style={styles.italic}>Puma yagouaroundi</Text>, je malá kočkovitá šelma. Jejím biotopem jsou nížinné lesy a křoviny Jižní a Střední Ameriky. Nejraději se zdržuje v&nbsp;blízkosti vody, kde může lovit ryby. Živí se i&nbsp;drobnými živočichy, jako jsou hlodavci, hmyz, ještěrky, žáby nebo ptáci. Někdy si však pochutná i&nbsp;na ovoci.
        </AnimalText>
        <AnimalText>
          Vzhledem se velmi podobá své blízké příbuzné, pumě. Má protáhlé svalnaté tělo, krátké nohy, dlouhý silný ocas a malé zakulacené uši. Svým vzhledem tedy připomíná vydru či lasici. Odtud se odvíjí i&nbsp;její anglická pojmenování <Text style={styles.italic}>otter cat</Text> či <Text style={styles.italic}>weasel cat</Text>. Její tělo dosahuje délky 50–77&nbsp;cm, ocas pak 33–61&nbsp;cm. Hmotností se většinou pohybuje v&nbsp;rozmezí 4,5–9&nbsp;kg. Srst má jednobarevnou, a to v&nbsp;různých odstínech šedé (až po černou), nebo červenohnědé (od zlatavě žluté až po kaštanově hnědou).
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jaguarundi žije samotářsky, společnost vyhledává jen v&nbsp;období páření. Po 70–75denní březosti se samici rodí obvykle 1–4&nbsp;mláďata. Dutinu stromu, v&nbsp;níž se narodí, opouští kotě přibližně v&nbsp;měsíci, pohlavně dospívá ve 2–3&nbsp;letech. Jaguarundi se dožívá 20&nbsp;let.
        </AnimalText>
        <AnimalText>
          V&nbsp;naší zoo chováme jaguarundi od roku 2009, kdy jsme z&nbsp;Polska dovezli dvě samice. O&nbsp;rok později jsme jednu vyměnili se Zoo Ostrava za samce Foxe, který se narodil v&nbsp;roce 2002 a kterého zde můžete spatřit i&nbsp;v&nbsp;současné době. Své jméno si zasloužil světlehnědým zbarvením srsti s&nbsp;rezavým nádechem. Spolu s&nbsp;ním zde můžete vidět samici Fionu, narozenou roku 2013 v&nbsp;Berlíně, která do Brna přijela v&nbsp;roce 2014. Výběh s&nbsp;rodiči nyní obývá i&nbsp;dcera Beatriz, narozená v&nbsp;listopadu 2015.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
