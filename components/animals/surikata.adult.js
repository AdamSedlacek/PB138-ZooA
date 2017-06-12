import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/surikata/01.jpg'),
  require('../../images/animals/surikata/02.jpg'),
  require('../../images/animals/surikata/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/surikata/01-thumb.jpg'),
  require('../../images/animals/surikata/02-thumb.jpg'),
  require('../../images/animals/surikata/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Surikata, která v&nbsp;češtině nemá druhé jméno a vědecký název ji odbyl pojmenováním <Text style={styles.italic}>Suricata suricatta</Text>, je šelma nepříliš velkého vzrůstu, na délku měří zhruba 30&nbsp;centimetrů, k&nbsp;tomu má ocas dlouhý 20&nbsp;centimetrů a váží necelé kilo. Kromě toho se vyznačuje výskytem na jihu Afriky, v&nbsp;polopouštích a savanách, kde se baví mimo jiné hloubením nor, ve kterých žijí početné surikatí klany. Do podzemí se ale schovává jen před nebezpečím nebo při velkém žáru, jinak se ráda sluní venku.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jedna nora může mít klidně 90&nbsp;východů a plochu tunelů v&nbsp;řádu stovek metrů čtverečních. To je číslo vzhledem k&nbsp;velikosti průměrné surikaty obdivuhodné, práci jí ovšem usnadňuje, že má k&nbsp;hrabání uzpůsobené drápy, díky nimž dokáže za vteřinu vyházet tolik písku, kolik sama váží. Navíc v&nbsp;jedné kolonii surikat žije 10–30&nbsp;jedinců, tedy 2&nbsp;či 3&nbsp;rodiny včetně mláďat.
        </AnimalText>
        <AnimalText>
          Surikatám se obvykle rodí čtyři potomci, po 11týdenní březosti se o&nbsp;ně nestará pouze matka, ale celý kolektiv, surikaty mají v&nbsp;podstatě chůvy. První tři týdny života jsou malá surikaťátka v&nbsp;noře, později už smí ven, kde jsou pod dohledem dospělých. Nad celým surikatím hemžením vždycky stojí aspoň jedna hlídka, která upozorňuje ostatní na nebezpečí vyluzováním různě bizarních zvuků. Surikaty samy loví převážně bezobratlé, příležitostně i&nbsp;plazy a drobné ptáky nebo savce.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Na závěr uveďme ještě dvě evoluční výhody surikat. Jednak mají na ušním boltci záhyb, který zamezuje tomu, aby jim do uší lezl písek a další nečistoty, jednak jsou značně odolné proti jedu – vydrží uštknutí hadem nebo štírem, které by zabilo i&nbsp;člověka.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
