import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vyrVelky/01.jpg'),
  require('../../images/animals/vyrVelky/02.jpg'),
  require('../../images/animals/vyrVelky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vyrVelky/01-thumb.jpg'),
  require('../../images/animals/vyrVelky/02-thumb.jpg'),
  require('../../images/animals/vyrVelky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Ahoj kamaráde! Já jsem pan Výr. Jsem největší sova v&nbsp;Evropě, proto mi říkají výr velký. Narodil jsem se první den roku 2011. Protože nerad žiji sám, svůj domeček tady v&nbsp;zoo sdílím s&nbsp;paní Výrovou, která je mladší než já. Na náš nový příbytek si zvykáme teprve od léta&nbsp;2015, protože oba pocházíme z&nbsp;jiné zoologické zahrady. 
        </AnimalText>
        <AnimalText>
        Abychom se s&nbsp;tebou mohli potkat, urazili jsme opravdu dlouhou cestu. Z&nbsp;vajíčka jsme totiž vykoukli v&nbsp;té největší zemi na světě, která leží v&nbsp;Evropě i&nbsp;v&nbsp;Asii. Víš, která to je? Říká se jí Rusko. Část tohoto státu se nazývá Sibiř. Odtud se vzal i&nbsp;náš další název – západosibiřský. Oproti teplotám, které znáš z&nbsp;České republiky, je tam tak velká zima, že si ji ani nedovedeš představit. 
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Když vyrostu, mohu být vysoký jako ty, když ti byl 1&nbsp;rok. A ve chvíli, kdy roztáhnu křídla, jsou dlouhá jako dospělý člověk na výšku. Můžu vážit 2–4&nbsp;kg, ale paní Výrová je větší než já. Oproti našim českým příbuzným máme světleji zbarvená pírka, která jsou místy až bílá.
        </AnimalText>
        <AnimalText>
        Jak určitě víš z&nbsp;pohádek o&nbsp;moudrých sovách, ve dne spíme a v&nbsp;noci létáme. Stejně tak i&nbsp;já jsem aktivnější spíše v&nbsp;noci než ve dne. V&nbsp;přírodě se dožíváme 20&nbsp;let, ale pokud se o&nbsp;mě moji chovatelé budou stále tak dobře starat, můžu si naši zahradu užívat i&nbsp;50 let.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Nejvíce mi chutnají menší zvířátka, můžou to být myšky, ale zvládnu i&nbsp;zajíce. Kamarád dokonce ulovil i&nbsp;koloucha. Největší zábava je však chytat ježky.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
