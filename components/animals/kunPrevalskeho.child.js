import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/kunPrevalskeho/01.jpg'),
  require('../../images/animals/kunPrevalskeho/02.jpg'),
  require('../../images/animals/kunPrevalskeho/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/kunPrevalskeho/01-thumb.jpg'),
  require('../../images/animals/kunPrevalskeho/02-thumb.jpg'),
  require('../../images/animals/kunPrevalskeho/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Íhahá! Tedy ahoj, děti!
        </AnimalText>
        <AnimalText>
          Takhle my se obvykle zdravíme, víte? Stejně jako normální koně, které jistě znáte. Ačkoliv my nejsme jen tak ledajací. My jsme koně Převalského, jediní opravdoví divocí koně.
        </AnimalText>
        <AnimalText>
          Tady v&nbsp;brněnské zoo jsme dvě holky, Petra a Rea. Označení „holky“ je však nadnesené, už zdaleka nejsme nejmladší. Obě pocházíme z&nbsp;pražské zoo a do Brna jsme přijely společně v&nbsp;roce 2005.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Dříve náš rod přebýval ve stepích a polopouštích střední Asie, především v&nbsp;Mongolsku. Souhrou několika faktorů jsme se však dostali až na pokraj vyhynutí. V&nbsp;naší domovině se rozmohlo pastevectví a stáda domácích zvířat obsadila všechny dostupné zdroje vody, takže jsme trpěli velkou žízní. Dlouhou dobu lidé považovali divoké koně za vyhynulé. To se změnilo až v&nbsp;roce 1881, kdy několik z&nbsp;našich předků zpozoroval na svých cestách ruský generál N.&nbsp;M.&nbsp;Prževalskij, po němž neseme své jméno. Ukázalo se, že v&nbsp;přírodě ještě několik málo jedinců divokého koně přežilo. Začali být tedy transportováni do evropských zoologických zahrad, aby mohli být chráněni. To se ukázalo jako správný krok – nebýt toho, je více než jisté, že bychom tu teď my dvě nebyly.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Ale nemyslete si, že jsme se za těch více než sto let stali z&nbsp;divokých spíš zdomácnělými koni. To teda ani náhodou! Divoký duch nám zůstal – a díky tomu se někteří z&nbsp;našich příbuzných mohou i&nbsp;po tolika letech vracet zpět do volné přírody Mongolska.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
