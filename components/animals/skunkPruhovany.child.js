import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/skunkPruhovany/01.jpg'),
  require('../../images/animals/skunkPruhovany/02.jpg'),
  require('../../images/animals/skunkPruhovany/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/skunkPruhovany/01-thumb.jpg'),
  require('../../images/animals/skunkPruhovany/02-thumb.jpg'),
  require('../../images/animals/skunkPruhovany/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Ahoj děti! Dovolte, abychom se vám představili, jsme skunkové pruhovaní. Jak se máte? My dnes pouze posedáváme a poleháváme, občas se proběhneme, ale úplně nejradši si dáme něco dobrého na zub. Spořádáme v&nbsp;podstatě všechno, co nám kdo dá, takže to s&nbsp;námi není vůbec složité. Nepohrdneme masem, oříšky, ovocem ani vajíčky.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Jsme krásně černobílí, přesněji řečeno černí s&nbsp;bílými pruhy. Ale nebojte, od zeber nás snadno rozeznáte. V&nbsp;dospělosti vážíme asi tolik jako menší jezevčík, takže si nás se zebrou opravdu nespletete.
        </AnimalText>
        <AnimalText>
        Moc rádi se procházíme ve zdejším výběhu. Jestli však nikoho z&nbsp;nás zrovna nevidíte, nejspíš spíme v&nbsp;některém z&nbsp;úkrytů nebo v&nbsp;boudě.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Jsme noční zvířata a denní světlo nás unavuje. Pokud by se nás někdo pokusil v&nbsp;našem odpočívání obtěžovat, jsme připraveni ho postříkat pěkně smradlavou kolínskou. Když totiž nepřítele nezastrašíme hrozivým dupáním, můžeme ze žláz pod ocáskem vystříknout páchnoucí olejovitou tekutinu, kterou jen tak nesmyjete. A&nbsp;to dokonce až na tři metry daleko! Ale to už jste o&nbsp;nás jistě slyšeli. Tak pozor na to a nezlobte!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
