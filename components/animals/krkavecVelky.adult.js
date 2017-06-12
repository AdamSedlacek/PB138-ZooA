import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/krkavecVelky/01.jpg'),
//  require('../../images/animals/krkavecVelky/02.jpg'),
//  require('../../images/animals/krkavecVelky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/krkavecVelky/01-thumb.jpg'),
//  require('../../images/animals/krkavecVelky/02-thumb.jpg'),
//  require('../../images/animals/krkavecVelky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          <Text style={styles.italic}>Byla jednou půlnoc tmavá, muž za oknem poklimbával,</Text>
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>nad knihou či pergamenem v&nbsp;křesle znaven víc a víc.</Text>
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>Bílá můra zaleskla se v&nbsp;žlutém svitu bílých svic,</Text>
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>zobáku už nevyhla se, on smutkem zkřivil svoji líc.</Text>
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>Skrz sklo na mě divně zíral, mou návštěvu nepřivítal,</Text>
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>já zakrákal „nikdy víc“.</Text>
        </AnimalText>
        <AnimalText>
        (Variace na Krkavce Edgara Alana Poea, z překladu Tomáše Jacka)
        </AnimalText>
        <AnimalText>

        </AnimalText>
        <AnimalText>
          Dámy a pánové,
        </AnimalText>
        <AnimalText>
          promiňte za uvítání ponurými verši v&nbsp;metru Poeova Krkavce, kterého většina z&nbsp;vás zná spíše pod Nezvalovým nepřesným překladem Havran.
        </AnimalText>
        <AnimalText>
          Krkavec je v naší kultuře často spojován s&nbsp;temnými silami či smrtí, proto ne náhodou hlavní hrdina básně propadal úzkosti z&nbsp;přítomnosti tak velkého černého ptáka, kterého někdo naučil mluvit. Ano, čtete správně. Krkavec je totiž největším ptákem, kterého řadíme mezi pěvce, jelikož dokáže bez problému a k&nbsp;nerozeznání napodobit lidský hlas a naučit se mnoho slov. Jako ostatní krkavcovití se vyznačuje vysokou inteligencí.
        </AnimalText>
        <AnimalText>
          Expozice krkavců velkých, latinsky nazývaných <Text style={styles.italic}>Corvus corax</Text>, je v&nbsp;brněnské zoo umístěna nad správní budovou. Pro zajímavost, pokud vám něco říká saltarello či si někdy poslechnete středověkou hudbu, pak je vám latinský název povědomý díky stejnojmenné hudební skupině.
        </AnimalText>
        <AnimalText>
          Krkavci se vyskytují v&nbsp;Asii, Evropě, severní Africe a Severní Americe. V&nbsp;polovině 19.&nbsp;století z&nbsp;české přírody téměř vymizeli. O&nbsp;století později se sice začali vracet, dodnes však patří mezi ohrožené a zvláště chráněné druhy.
        </AnimalText>
        <AnimalText>
          Krkavci žijí v párech. Náš samec se narodil v&nbsp;roce 2004 a do brněnské zoo byl přivezen 14.&nbsp;12.&nbsp;2012. Samička se narodila v&nbsp;dubnu roku 2012 a ještě v&nbsp;červenci téhož roku k&nbsp;nám přijela z&nbsp;Košic. Krkavčí pár uvidíte na horních větvích voliéry, kde na sebe často krákají či jinak komunikují. Mladé zatím neměli, ačkoliv jsou krkavci obecně velmi starostliví rodiče, a to jak samec, tak samička. Proto rozhodně nevěřte zažitým pomluvám o&nbsp;krkavčích matkách.
        </AnimalText>
        <AnimalText>
          Krkavci měří na délku 54–67&nbsp;cm, přičemž rozpětí křídel mají asi 115–130&nbsp;cm. Průměrně váží 700–1600&nbsp;g. Na bázi zobáku mají charakteristické opeření. Živí se bezobratlými živočichy, plazy, ptáky, drobnými obojživelníky, mršinami, případně semeny. Ve volné přírodě se dožívají kolem 20&nbsp;let, ovšem v&nbsp;péči člověka se mohou dožít až trojnásobného věku.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
