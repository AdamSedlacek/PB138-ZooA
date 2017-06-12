import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/losEvropsky/01.jpg'),
  require('../../images/animals/losEvropsky/02.jpg'),
  require('../../images/animals/losEvropsky/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/losEvropsky/01-thumb.jpg'),
  require('../../images/animals/losEvropsky/02-thumb.jpg'),
  require('../../images/animals/losEvropsky/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Hohó! Kohopak to tu máme? Že ty jsi člověk z&nbsp;řádu primátů? Já jsem z&nbsp;řádu sudokopytníků, rodu losů a jmenuji se Fifi. Se mnou tu bydlí ještě několik kamarádů. Sousedíme se soby polárními, oproti kterým jsme větší a urostlejší. Ten největší z&nbsp;nás, co má parohy, je samec. Pokud ho nevidíš, může to být tím, že zrovna své parohy shodil. Každý rok je shazuje a poté čeká, až mu dorostou nové. Ani netušíš, jak se na nové parohy vždy těší! Asi tak, jako ty se těšíš o&nbsp;Vánocích na dárky.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Je na nás zajímavá spousta věcí. Například výborně slyšíme, takže jestli ses nám chtěl posmívat, že naše tlama vypadá jako oslí, tak to ani nezkoušej! Oproti oslovi jsme mnohem větší a máme krásná kopýtka. Jsme zvyklí žít na chladném severu v&nbsp;bažinách. Naše kopýtka jsou pořádně široká, takže když jdeme po blátě, nezapadneme do něj. Srst máme hustou a na krku nosíme hřívu. Díky ní ti můžeme připomínat koně, avšak ve srovnání s&nbsp;ním máme kratší krk. Ten nám bohatě stačí.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Jsme býložravci stejně jako sobi. Znamená to, že si pochutnáváme na trávě, listech a jiných výhoncích. Masem bys nás nepohostil. A protože rádi okusujeme stromky a keříky, které jsou dostatečně vysoké, nepotřebujeme dlouhatánský krk. Avšak nemysli si, že nedosáhneme hlavou na zem! Dosáhneme, jen musíme více rozkročit nohy.
        </AnimalText>
        <AnimalText>
          Nejvíce jsme však pyšní na to, že jsme i&nbsp;dobří plavci. Aspoň se to o&nbsp;nás losech říká. Já sama jsem vlastně plavat nikdy nezkoušela, ale z&nbsp;nás všech jsem v&nbsp;plavání určitě nejlepší!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
