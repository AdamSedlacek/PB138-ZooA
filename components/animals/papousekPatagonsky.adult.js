import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/papousekPatagonsky/01.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/papousekPatagonsky/01-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Seznamte se s&nbsp;papoušky patagonskými (lat. <Text style={styles.italic}>Cyanoliseus patagonus</Text>) nebo jak jim zkráceně říkáme – patagonci. Na první pohled je poznáte podle zbarvení v&nbsp;odstínech olivově zelené, šedé, modré, žluté a červené. Jejich voliéru není možné minout – rádi o&nbsp;sobě totiž dávají vědět svým charakteristickým silným křikem. Současnou partu těchto barevných krasavců jsme postupně získali v&nbsp;letech 2012 a 2014. Momentálně zde chováme tři samečky a dvě samičky.
        </AnimalText>
        <AnimalText>
          Patagonci jsou unikátní v&nbsp;mnoha ohledech. Na rozdíl od většiny ostatních papoušků nehnízdí na stromech, nýbrž ve skalních puklinách a norách, které si sami vyhrabávají do útesů z&nbsp;vápence, pískovce či jílu. Tyto nory bývají dlouhé až tři metry a mohou tvořit rozsáhlý labyrint chodeb. Na konci nory se obvykle nachází rozšířená hnízdní dutina, kam samičky kladou vejce.
        </AnimalText>
        <AnimalText>
          Další zvláštností je jejich odolnost vůči chladu. Zatímco většina jiných papoušků se před příchodem mrazů přesouvá do chovatelského zázemí, patagonci jsou schopni bez větších problémů vydržet ve venkovní voliéře celou zimu díky dispozicím získaným z&nbsp;domoviny.
        </AnimalText>
        <AnimalText>
          Papoušci patagonští pochází z&nbsp;klimaticky poměrně drsného jihu Jižní Ameriky. Patagonie, jak se tato rozsáhlá oblast nazývá, náleží z&nbsp;větší části Argentině a z&nbsp;menší části Chile. Papoušky zde najdete především v&nbsp;pustých, otevřených oblastech, jako jsou suché stepi a polopouště. Obývají také oblasti ve vyšších nadmořských výškách, kupříkladu v&nbsp;podhůří And, kde často vystupují až do 2&nbsp;000&nbsp;metrů nad mořem. Jedná se o&nbsp;tažný druh, což znamená, že se v&nbsp;zimě stěhují do teplejších oblastí, zejména do severovýchodní Argentiny a Uruguaye.
        </AnimalText>
        <AnimalText>
          Papoušci patagonští jsou velmi společenští ptáci. Žijí v&nbsp;koloniích, které mnohdy čítají až několik set jedinců. Patagonci si vytvářejí partnerství na celý život a jsou striktně monogamní.
        </AnimalText>
        <AnimalText>
          Jako většina papoušků se živí převážně semeny, plody či měkkými částmi rostlin. Ti naši si obzvlášť rádi pochutnávají na paličkách kukuřice a listech mangoldu.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
