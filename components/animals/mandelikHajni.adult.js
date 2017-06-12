import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/mandelikHajni/01.jpg'),
  require('../../images/animals/mandelikHajni/02.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/mandelikHajni/01-thumb.jpg'),
  require('../../images/animals/mandelikHajni/02-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          <Text style={styles.italic}>Coracias garrulus</Text> nese české jméno mandelík hajní podle faktu, že rád číhá na kořist na vyvýšených místech, jako jsou stromy, dráty, sloupy nebo „panáky“ snopů, kterým se říká mandele.
        </AnimalText>
        <AnimalText>
          Mandelík se svojí stavbou těla podobá vráně, ačkoliv je menší. Měří 29–32&nbsp;cm a váží do 190&nbsp;g. Rozpětí křídel má až 58&nbsp;cm. Na rozdíl od vrány všechny na první pohled uchvátí svým úžasně zbarveným peřím. Rozhodně nepřehlédnete světle modrého ptáka s&nbsp;oslňujícími azurově modrými křídly, jež kontrastují s&nbsp;černými špičkami křídel, tmavším ocasem a hnědavě oranžovými zády. Navíc má oko namalované tenkou černou linkou.
        </AnimalText>
        <AnimalText>
          Ze všech mandelíků je jediný, jenž žije i&nbsp;v&nbsp;Evropě, a to v&nbsp;jižní, střední a jihovýchodní části, na sever jeho oblast zasahuje až k&nbsp;Petrohradu. Vyskytuje se ale i&nbsp;v&nbsp;západní a střední Asii a v&nbsp;severní Africe. Objevuje se v&nbsp;teplých a slunných nížinách. Má rád otevřenou krajinu s&nbsp;remízky a alejemi starých stromů s&nbsp;dutinami, okraje světlých lesů, velké paseky a staré sady.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />  
        <AnimalText>
          Kvůli potravě v&nbsp;chladnější části roku u&nbsp;nás však mandelík nezimuje. V&nbsp;srpnu a září odlétá do střední a jižní Afriky, odkud se vrací obvykle během dubna a května. Na svých afrických zimovištích obývá především suchou, zalesněnou savanu a pusté pláně.
        </AnimalText>
        <AnimalText>
          Mandelík necestuje sám. Výlet absolvuje s&nbsp;dalšími statisíci ptáky, proto je to jedna z&nbsp;nejviditelnějších afrických migrací. A co je obdivuhodné? Tak obrovské hejno je schopné mezi kontinenty s&nbsp;přestávkami uletět i&nbsp;přes 10&nbsp;000&nbsp;km.
        </AnimalText>
        <AnimalText>
          Živí se bezobratlými, jako jsou brouci, cvrčci, kobylky, housenky, mouchy a pavouci. Ví také, jak ukořistit i&nbsp;větší zvířata, mezi něž patří žáby, ještěrky, hadi a slabí drobní ptáci.
        </AnimalText>
        <AnimalText>
          V&nbsp;celé Evropě však počet mandelíků klesá. V&nbsp;severní části i&nbsp;v&nbsp;České republice už vymizeli úplně. Dnes se tak tento nádherný a pestrý pták stává velkou vzácností.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
