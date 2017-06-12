import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/medvedLedni/01.jpg'),
  require('../../images/animals/medvedLedni/02.jpg'),
  require('../../images/animals/medvedLedni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/medvedLedni/01-thumb.jpg'),
  require('../../images/animals/medvedLedni/02-thumb.jpg'),
  require('../../images/animals/medvedLedni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Milé děti,
        </AnimalText>
        <AnimalText>
        </AnimalText>      
        <AnimalText>
          jmenuji se Noria a jsem zatím nejmladším medvídětem místních ledních medvědů, jimiž jsou Cora a Umca. Narodila jsem se v&nbsp;listopadu 2015. Oběma mým rodičům bylo v&nbsp;té době sedmnáct let.
        </AnimalText>
        <AnimalText>
          Říkáte si: „Tak mladí?!“ U&nbsp;nás zvířat je to trošku jiné než u&nbsp;lidí, dospíváme už ve třetím až pátém roce života a i&nbsp;děti míváme mnohem dříve než vy. Tak třeba když se narodili mí nejstarší bráchové, Bill a Tom, bylo našim teprve devět let! Kometu a Nanuka měli ve čtrnácti – a pak už jsem se narodila já. A ještě vám řeknu jednu zajímavost, všichni máme narozeniny ve stejném měsíci – v&nbsp;listopadu.
        </AnimalText>
        <AnimalText>
          O&nbsp;mých starších sourozencích mi vyprávěla maminka před spaním, když jsem byla malá. Stejně tak o&nbsp;tátovi. Občas ho zaslechnu z&nbsp;vedlejšího výběhu, ale k&nbsp;němu mě chovatelé nepustí. Asi se bojí, že bych ho moc zlobila. Což je pravda. Zlobit, to já umím moc dobře! Ale maminka už má s&nbsp;výchovou mláďat bohaté zkušenosti, takže nezvlčím. Maximálně zmedvědím.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />      
        <AnimalText>
          Když jsem se narodila, vážila jsem jen o&nbsp;něco víc než půl pytlíku mouky. Vypadala jsem spíš jak morče než jak medvěd. Maminka mě tulila k&nbsp;sobě, abych byla v&nbsp;teple a mohla se najíst, kdykoliv jsem měla hlad. A já jsem při tom blahem hrčela jak traktor. Když totiž medvíďata sají mléko, opravdu to zní jako startující traktor! Ale po pár měsících už jsem začala běhat po venku a rostla jak z&nbsp;vody. I&nbsp;když je možné, že jsem opravdu rostla z vody – strašně ráda plavu, a ještě raději házím do bazénu balon a pak za ním skáču. Jsem totiž věrná svému jménu – jsem medvěd lední, a voda je přeci taky led, jen rozpuštěný.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} /> 
        <AnimalText>
          Na závěr by se hodilo dodat ještě nějaké moudro. Tak třeba: zlobit můžete, ale jen trošku. Jinak buďte na rodiče hodní, vždyť oni si to zaslouží.
        </AnimalText>
        <AnimalText>
          Mějte se hezky a zas někdy příště!
        </AnimalText>
        <AnimalText>
        </AnimalText>
        <AnimalText>
          Vaše Noria
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
