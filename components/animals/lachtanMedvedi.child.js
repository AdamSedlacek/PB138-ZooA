import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/lachtanMedvedi/01.jpg'),
  require('../../images/animals/lachtanMedvedi/02.jpg'),
  require('../../images/animals/lachtanMedvedi/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/lachtanMedvedi/01-thumb.jpg'),
  require('../../images/animals/lachtanMedvedi/02-thumb.jpg'),
  require('../../images/animals/lachtanMedvedi/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
          <AnimalText>
            Zdravím, člověčí mládě!
          </AnimalText>
          <AnimalText>
            Jsem Sema, lachtan medvědí, nechceš si hrát s&nbsp;balonem? Nemusíš se bát, že jsme tu na tebe dva, já i&nbsp;moje kamarádka Vafla jsme hodní. Jestli se ti zdá, že máme zvláštní jména, tak je to tím, že jsme je dostali v&nbsp;zoo v&nbsp;ruském Rostově, odkud jsme do Brna přijeli jako vánoční dárek 20.&nbsp;12. 2013. Musím se pochlubit, že narazit na nás v&nbsp;zoo je celkem vzácnost! Další lachtany medvědí, jako jsme my, bys našel až daleko v&nbsp;Berlíně či Hannoveru, což je v&nbsp;Německu.
          </AnimalText>
          <AnimalText>
            Od ostatních druhů lachtanů mě můžeš rozeznat díky mým velkým očím a uším. Velká ouška mám proto, aby mi do nich nezatekla voda, když plavu. Taky mám velkou zadní ploutev, která mi pomáhá při plavání. Schválně, jak dlouho vydržíš pod vodou? Já až sedm minut! Ale to dělám, jenom když si hraju s&nbsp;kamarády, normálně se pod vodou schovávám kolem dvou a půl minuty.
          </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Kluky od holek lachtanů medvědích rozeznáš celkem snadno. V&nbsp;dospělosti mají holky okolo 150&nbsp;cm, což je asi jako celá tvoje postýlka, a váží kolem 50&nbsp;kg. To je o&nbsp;něco míň, než kolik váží dospělá člověčí holka, nebo si to můžeš představit jako obrovský pytel brambor. Zato já budu větší! Až budu dospělý, budu vážit až 270&nbsp;kg, to je jako tři a půl průměrných dospělých pánů dohromady!
          </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
          <AnimalText>
            Abych pořádně vyrostl, musím hodně jíst. Denně zvládnu spořádat až 5&nbsp;kg ryb. Každý den dostávám sledě, makrely a jako pochoutku kalamáry.
          </AnimalText>
          <AnimalText>
            Tak ahoj, zamávám ti na rozloučenou!
          </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
