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
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Nazdárek vespolek. Možná nás znáte, jsme surikaty. Asi vás drobet překvapuje, že za nás nemluví jenom jedna surikata. Je to proto, že jsme společenská zvířata a máme dost pevný kolektiv. Běžně žijí pohromadě dvě nebo tři surikatí rodiny, je nás pospolu třeba dvacet. Když se nám narodí mláďata, staráme se o&nbsp;ně společně, společně si hrajeme i&nbsp;stavíme.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jo, stavíme. Určitě jste si všimli, že tu máme pár děr do země. Kdybychom neměly tak rády sluníčko, mohly bychom být pány podzemí, naše nory totiž můžou mít desítky východů a měřit stovky metrů. Tunelování nám nedělá problém, protože jsme se k&nbsp;hrabání narodily. Máme totiž tak skvělé drápy, že dokážeme během jediné vteřiny odházet tolik písku, kolik samy vážíme. Kolik že to je? Podle toho, jak jsme velké, půl kila až kilo. Když jsme u těch čísel, měříme kolem 30&nbsp;centimetrů – a k&nbsp;tomu taky musíme připočíst ocas, který nám přidá dobrých 20&nbsp;centimetrů, takže nejsme žádní trpaslíci.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Zapomněly jsme na něco? Kde že žijeme? Na jihu Afriky, máme rády stepi, savany a polopouště, zkrátka místa, kde je celkem sucho a není tam moc stromů. Potřebujeme totiž mít přehled, co se kolem nás děje. Máte pravdu, to je přesně ten důvod, proč vždycky jedna z&nbsp;nás stojí na vyvýšeném místě a rozhlíží se po okolí. My ostatní se pak nemusíme bát a víme, že kdyby přišlo nebezpečí, hlídka nás včas varuje, takže můžeme mezitím třeba lovit. Rády si pochutnáváme na hmyzu a pavoucích. Ale teď nás omluvte, jdeme zase stavět, slunit se a hrát si.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
