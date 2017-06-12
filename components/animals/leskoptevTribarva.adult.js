import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/leskoptevTribarva/01.jpg'),
  require('../../images/animals/leskoptevTribarva/02.jpg'),
  require('../../images/animals/leskoptevTribarva/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/leskoptevTribarva/01-thumb.jpg'),
  require('../../images/animals/leskoptevTribarva/02-thumb.jpg'),
  require('../../images/animals/leskoptevTribarva/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Leskoptev je pták. To každého napadne, protože to zní trochu jako koroptev. Průměrná koroptev je ovšem mnohem méně barevná, větší a popravdě mnohem méně zajímavá. A aby toho nebylo málo, svým chováním připomínají leskoptve z&nbsp;našeho ptactva spíš kukačky. Latinský název zní <Text style={styles.italic}>Lamprotornis superbus</Text>, přičemž patří do čeledi špačkovitých. Tyto informace by mohly evokovat představu trojbarevného špačka velikosti autobusu, jak rozsedá třešeň. Vězte však, že leskoptev dorůstá zhruba 18&nbsp;centimetrů, což jsou přibližně 2/3 koroptve nebo špaček bez nožiček. Co se hmotnosti týče, pohybují se leskoptve mezi 52–77&nbsp;gramy, tedy 6,5×&nbsp;méně, než co váží průměrné koroptve (nebo tolik, kolik by vážil špaček anorektik). 
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Strava leskoptví sestává z&nbsp;bobulí a malých plodů, nepohrdnou ale ani různým hmyzem. Krmí se sarančaty, kudlankami, střevlíky nebo housenkami motýlů. Slupnou i&nbsp;termita, takže kdyby byly leskoptve známější, nemusela by Lorelai v&nbsp;Gilmorových děvčatech tak naříkat, bylo by jí stačilo pořídit si pár leskoptví.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Leskoptve se vyskytují v&nbsp;hejnech na suchých oblastech nebo v&nbsp;civilizaci, a to ve východní Africe, pro zapřisáhlé zeměpisce ve střední Tanzanii, v&nbsp;Keni, na západě Ugandy, jihozápadě Súdánu, v&nbsp;jižní Etiopii a Somálsku. Ve všech těchto místech si staví hnízda v&nbsp;trní, dokonce si hnízdo opevňují tím, že k&nbsp;němu nastrkají trnité větve, pokud je strom nebo keř, který se rozhodly osídlit, málo pichlavý. Někdy se ovšem leskoptve rozhodnou, že si hnízdo stavět nebudou. To potom, jako takové specializované kukačky, najdou hnízdo snovačů bělohlavých a svá vejce nakladou tam. Někdy dokonce snovačům vyhážou jejich vejce, aby se hnízda zmocnily a mohly do něj naklást svá obvyklá 4&nbsp;vejce, jejichž inkubace zabere necelé 2&nbsp;týdny. V&nbsp;zoo se takovýchto zločinů dopouštět nemohou. Zejména proto, že tu jsou tři samečci, ale žádná samička.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
