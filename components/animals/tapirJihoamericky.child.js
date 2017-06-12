import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/tapirJihoamericky/01.jpg'),
  require('../../images/animals/tapirJihoamericky/02.jpg'),
  require('../../images/animals/tapirJihoamericky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/tapirJihoamericky/01-thumb.jpg'),
  require('../../images/animals/tapirJihoamericky/02-thumb.jpg'),
  require('../../images/animals/tapirJihoamericky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Čau, já jsem Django. Jsem jihoamerickej tapír. Zatímco si tohle čtete, já už jsem dávno pryč. Dostal jsem za úkol očíhnout to u&nbsp;konkurence na severu. Ale hezky od začátku:
        </AnimalText>
        <AnimalText>
          Narodil jsem se tady v&nbsp;zoo na začátku roku 2015. Žil jsem tady s&nbsp;mámou Neny a tátou Cuzcem. Jak vás asi napadlo, náš druh je z&nbsp;Jižní Ameriky, žijem tam v&nbsp;deštných pralesech. Různí naši bratránci žijou třeba v&nbsp;Asii, prostě na dalších místech, kde jsou deštný pralesy. Ale teď vám budu povídat o&nbsp;nás.
        </AnimalText>
        <AnimalText>
          Protože jsem už velkej kluk, nepoznali byste mě podle barvy od rodičů. Jsme všichni dohněda. Když jsem ale byl mrně, byl jsem pruhovanej jak sele divokýho prasete, tmavohnědej s&nbsp;bílýma pruhama. My tapíři se rádi cachtáme ve vodě, jsme dost dobrý plavci, dokážem se i&nbsp;potápět. Při lovu nám ale potápění nepomůže, protože jsme vegetariáni. Takže lovíme jen kytky a občas, když je někde poblíž pole, zaběhnem i&nbsp;na něj a smlsnem si na kukuřici nebo něčem podobným. Naneštěstí se některejm tapírům stává, že si na ně udělá zálusk nějaký zvíře, třeba jaguár nebo kajman. Občas taky člověk. Aspoň tak to psal pan Floss v&nbsp;Lovcích orchidejí.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pokud se vedle nás postavíte, budete skoro určitě vyšší než my. Na výšku dorůstáme nejvíc metr, zato tělo máme dlouhý až dva metry, takže pokud váš taťka nebourá hlavou do futer, nemá na nás ani on. A protože nejsme žádný tintítka, vážíme přes sto kilo, můžem mít klidně i&nbsp;250&nbsp;kilo, což je zhruba stejně jak deset sedmiletejch dětí.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Než se s&nbsp;váma rozloučim, ještě vám musim říct, že jsem lichokopytník. Takže jsem příbuznej s&nbsp;koňma a nosorožcema. Jsem hezkej jako kůň a zajímavej jak nosorožec. Takže bacha, ať neničíte deštný pralesy, a mějte se krásně.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
