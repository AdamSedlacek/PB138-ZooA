import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/velbloudDvouhrby/01.jpg'),
  require('../../images/animals/velbloudDvouhrby/02.jpg'),
  require('../../images/animals/velbloudDvouhrby/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/velbloudDvouhrby/01-thumb.jpg'),
  require('../../images/animals/velbloudDvouhrby/02-thumb.jpg'),
  require('../../images/animals/velbloudDvouhrby/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Dobrý den, dovolte, abychom se vám představili. My jsme velbloudi, velbloudi dvouhrbí. Můžete nám říkat také drabaři, nebo chcete-li být za vzdělance, smíte nás oslovovat latinsky <Text style={styles.italic}>Camelus bactrianus</Text>, vadit nám to nebude.
        </AnimalText>
        <AnimalText>
          Jsme sudokopytníci z&nbsp;čeledi velbloudovitých a naši příbuzní žijící ve volné přírodě jsou druhem kriticky ohroženým. Najít je můžete ve stepích a pouštích Číny a Mongolska, kde žijí ve zhruba třicetičlenných stádech vedených dospělým samcem.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Oblíbenou potravou nás velbloudů, ať už v&nbsp;Asii nebo tady v&nbsp;Brně, jsou trávy, byliny a keře. Již 4,5&nbsp;tisíce let jsme domestikovaným druhem a v&nbsp;lidské péči se dožíváme 20–30&nbsp;let.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Naší známou předností je to, že vydržíme dlouhé týdny bez vody. A je to tak! Naše tělo je schopné překonat až 20%&nbsp;úbytek vody v&nbsp;těle. Zato když máme žízeň, jsme schopni vypít za 10&nbsp;minut až 110&nbsp;litrů vody. A ještě k&nbsp;tomu jsme jako jediní savci schopni pít i&nbsp;slanou vodu.
        </AnimalText>
        <AnimalText>
          Ještě jsme se vám nepředstavili osobně! Rychle to tedy napravíme. V&nbsp;Brně nás je celkem pět. Samec Dred pochází z&nbsp;Polska a v&nbsp;Brně je od roku 2014. Pak jsme tu čtyři samice. Salika je brněnská rodačka a je z&nbsp;nás nejstarší, narodila se v&nbsp;roce 1992, Fatima se narodila v&nbsp;roce 2006 v&nbsp;Ostravě a k&nbsp;nám do Brna přesídlila v&nbsp;roce 2008. A pak tu máme mámu s&nbsp;dcerou – Majdu a Bellu. Majda pochází ze Slovenska a do Brna přicestovala jako ani ne roční mládě v&nbsp;roce 2004 a v&nbsp;roce 2014 se jí narodila Bella.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
