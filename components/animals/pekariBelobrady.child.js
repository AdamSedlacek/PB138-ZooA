import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pekariBelobrady/01.jpg'),
  require('../../images/animals/pekariBelobrady/02.jpg'),
  require('../../images/animals/pekariBelobrady/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pekariBelobrady/01-thumb.jpg'),
  require('../../images/animals/pekariBelobrady/02-thumb.jpg'),
  require('../../images/animals/pekariBelobrady/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj mláďátko, já jsem pekari bělobradý. Co jsi ty zač? Aha, vidím, že kráčíš po zadních, takže jsi buď klokan, pták, nebo člověk. Nevidím ocásek, klokan tedy nebudeš, na ptáka máš moc málo peří. Zřejmě jsi tedy člověčí mládě.
        </AnimalText>
        <AnimalText>
          Já se jmenuji Cyril a z&nbsp;pánů jsem tady nejstarší. Narodil jsem se v&nbsp;roce 2008 v&nbsp;hlavním městě Německa, tedy v&nbsp;Berlíně. Do Brna jsem přijel v&nbsp;doprovodu čtyř samiček. V&nbsp;létě roku 2013 se mi tady narodil syn.
        </AnimalText>
       <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          My pekariové pocházíme z&nbsp;amerického světadílu, z&nbsp;tropických deštných pralesů a dalších oblastí od jižního Mexika až po Argentinu.
        </AnimalText>
        <AnimalText>
          Máme vynikající čich i&nbsp;sluch a velmi rádi si smočíme kopýtka ve vodě. A nejen kopýtka! Ač by tě to při pohledu na nás možná nenapadlo, umíme velmi dobře plavat. To však není náš jediný oblíbený sport – kdyby se blížilo nebezpečí, dokážeme i&nbsp;docela rychle běhat. Nejčastěji se živíme plody, kořeny rostlin, trávou, ale i&nbsp;malými živočichy.
        </AnimalText>
       <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Vypadáme jako divoká prasátka, ale rozeznáš nás podle toho, že máme bílou skvrnu na bradě (díky ní jsme dostali své pojmenování). Od divokých prasátek se odlišujeme také tím, že žijeme ve velkých skupinách, v&nbsp;nichž nás může být až několik stovek. Dorůstáme do výšky až 60&nbsp;centimetrů, to je jako dvě kočky nad sebou, a délky až 120&nbsp;centimetrů, což je jako dvě kočky (počítáno bez ocasu) za sebou.
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          P. S.: Při psaní tohoto textu nepřišla žádná kočka o&nbsp;ocásek.
        </AnimalText>

      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
