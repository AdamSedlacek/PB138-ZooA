import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/plamenakRuzovy/01.jpg'),
  require('../../images/animals/plamenakRuzovy/02.jpg'),
  require('../../images/animals/plamenakRuzovy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/plamenakRuzovy/01-thumb.jpg'),
  require('../../images/animals/plamenakRuzovy/02-thumb.jpg'),
  require('../../images/animals/plamenakRuzovy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Ahoj kamarádi,
        </AnimalText>
        <AnimalText>
          my jsme plameňáci růžoví a patříme k&nbsp;velkým ptákům. Máme velmi dlouhý a tenký krk. I&nbsp;naše prsty na nohou jsou dlouhé a tenké, ale navíc jsou ještě spojeny plovací blánou. Na těle, křídlech i&nbsp;na krku máme měkká peříčka, která jsou bílá až světle růžová. A že jste nás viděli už tmavě růžové, třeba ve filmu Madagaskar? Inu, i&nbsp;to se může stát. Naše peří mění barvu podle toho, co zrovna jíme. Máme rádi plankton, vodní korýše a měkkýše či červíky. Čím víc pak sníme červených dobrot, které obsahují pigmenty karotenoidy, tím růžovější jsme. Nicméně zkuste se podívat, jak vlastně jíme. Zobák nám slouží jako cedník, bláto vyteče a pochutiny zůstanou. Nabírat a filtrovat vodu dokážeme až 20krát za minutu! A když máme doloveno, zůstanou po nás v&nbsp;mělkých jezerech či lagunách stopy. Určitě nějaké najdete i&nbsp;vy.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pokud se zaposloucháte, můžete slyšet, jak si povídáme. Zní to podobně jako husí kejhání. My na sebe rádi voláme, jsme totiž velmi společenští, naše kolonie mohou mít až 200&nbsp;000&nbsp;jedinců. Můžete zkusit poznat samečky, kteří jsou větší, samičky, které jsou menší a ptáčata, která mají jen málo bílých peříček.
        </AnimalText>
        <AnimalText>
          Veselé je, když chceme vzlétnout. Musíme se pořádně rozběhnout, abychom nabrali rychlost. Dlouhý krk máme natažený dopředu a nohy dozadu. Jsme jako opeřená letadla. I&nbsp;Márty se tomu smál. A  když si chceme odpočinout, stoupneme si na jednu nohu a hlavu schováme pod křídlo. Chráníme si velký červený zobák, který má černou špičku a velmi citlivou kůži. Také dobře vidíme, ale necítíme skoro nic. A oko máme větší než mozek.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Zkuste si na nás taky někdy zahrát, stačí, když si stoupnete na jednu nohu a schováte si hlavu pod rameno. Kdo to umí lépe?
        </AnimalText>
        <AnimalText>
          Tak zase příště, kamarádi.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
