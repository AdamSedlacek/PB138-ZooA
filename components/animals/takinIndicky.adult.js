import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/takinIndicky/01.jpg'),
  require('../../images/animals/takinIndicky/02.jpg'),
  require('../../images/animals/takinIndicky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/takinIndicky/01-thumb.jpg'),
  require('../../images/animals/takinIndicky/02-thumb.jpg'),
  require('../../images/animals/takinIndicky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Takin indický, latinsky <Text style={styles.italic}>Budorcas taxicolor taxicolor</Text>, je velmi zvláštní sudokopytník čeledi turovitých. V&nbsp;čem tkví jeho zvláštnost? Jaké jiné zvíře připomíná tolik dalších? Je to bizon, pakůň, los nebo kamzík? Právě všechna tato zvířata se svojí určitou vlastností snoubí v&nbsp;jednom takiním těle.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Bohužel i&nbsp;přes svoji hbitost, připisovanou spíše kamzíkům, je takin na stupních ohrožení zranitelným druhem – těch indických už na světě není více než půl čtvrtého tisíce. Vyskytuje se na jihu Číny, v&nbsp;indickém státě Ásám, v&nbsp;Tibetu a Bhútánu, ale i&nbsp;v&nbsp;Barmě. Obvykle žije ve výšce 2&nbsp;500&nbsp;až 4&nbsp;500&nbsp;metrů nad mořem. Takini se naštěstí docela činí, takže zatím není všem takiním dnům konec.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jedinec takina indického může vážit až 350&nbsp;kilogramů a v&nbsp;kohoutku měřit i&nbsp;130&nbsp;centimetrů, na délku pak 170&nbsp;až 220&nbsp;centimetrů. Kůže takina produkuje maz, který mu pomáhá chránit se proti drsným povětrnostním podmínkám panujícím v&nbsp;jeho přirozeném prostředí, zejména proti mlze a dešti. Takin se živí trávou, listy, bambusovými nebo pěnišníkovými výhonky.
        </AnimalText>
        <AnimalText>
          Žije v&nbsp;menších stádech (tvořených deseti až třiceti zvířaty), jeho samice je březí až 220&nbsp;dní a má obvykle jen jedno mládě. Ve volné přírodě se dožívá dvanácti až patnácti let, v&nbsp;lidské péči i&nbsp;dvaceti let.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
