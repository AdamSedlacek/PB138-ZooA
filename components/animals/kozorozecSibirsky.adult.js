import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kozorozecSibirsky/01.jpg'),
  require('../../images/animals/kozorozecSibirsky/02.jpg'),
  require('../../images/animals/kozorozecSibirsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kozorozecSibirsky/01-thumb.jpg'),
  require('../../images/animals/kozorozecSibirsky/02-thumb.jpg'),
  require('../../images/animals/kozorozecSibirsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Kozorožec sibiřský (<Text style={styles.italic}>Capra sibirica</Text>) je jedním z&nbsp;druhů divoce žijících koz. Na první pohled vás nepochybně upoutá svými mohutnými, obloukovitě zahnutými rohy. U&nbsp;samců tyto rohy dorůstají průměrné délky 100–148&nbsp;cm, zatímco v&nbsp;případě samic jejich délka obvykle nepřesáhne 40&nbsp;cm. Na rozích si mimo jiné můžete všimnout i&nbsp;vystupujících prstenců, podle nichž lze určit stáří zvířete.
        </AnimalText>
        <AnimalText>
          Domovem tohoto druhu kozorožce je centrální a severní Asie. Hojně se vyskytuje v&nbsp;horských oblastech jižní Sibiře a na území směrem od Afghánistánu a Pákistánu až po Mongolsko. Jeho přirozeným prostředím jsou vysokohorské tundry, louky a polopouště. Jídelníček kozorožce tedy tvoří převážně horské byliny, trávy, pupeny, mechy a lišejníky. Během léta také s&nbsp;oblibou olizuje sůl, která mu dodává potřebné minerály.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Samci většinou žijí samotářsky nebo vytvářejí menší skupinky. Samice naopak žijí spolu s&nbsp;mláďaty ve velkých stádech, která čítají až 50 jedinců. V&nbsp;období říje svádí samci boje o&nbsp;samice a stáda obou pohlaví se za účelem rozmnožování obvykle slučují. Samice bývají březí zhruba 160&nbsp;dnů a rodí obvykle jedno mládě. Rohy se u&nbsp;mláďat objevují až po 3 či 4 týdnech od narození. Plné velikosti kozorožci dorůstají v&nbsp;9 letech, přičemž dospělý samec může vážit až 130&nbsp;kg. V&nbsp;průměru se ve volné přírodě dožívají 15&nbsp;let, v&nbsp;lidské péči až 22&nbsp;let. Mezi hlavní predátory kozorožců patří především medvědi, vlci a levharti sněžní. Menší jedince mohou ulovit také rysi nebo rosomáci.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jejich chov je v&nbsp;zoologických zahradách poměrně vzácný a v&nbsp;České republice jsou k&nbsp;vidění pouze v&nbsp;Brně a Olomouci. V&nbsp;naší zoo se těmto sudokopytníkům daří více než dobře. Máme zde početnou skupinku kozorožců, kteří se pravidelně rozmnožují a novými přírůstky nás obdařují každý rok.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
