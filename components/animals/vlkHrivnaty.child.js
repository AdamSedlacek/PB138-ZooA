import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/vlkHrivnaty/01.jpg'),
  require('../../images/animals/vlkHrivnaty/02.jpg'),
  require('../../images/animals/vlkHrivnaty/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/vlkHrivnaty/01-thumb.jpg'),
  require('../../images/animals/vlkHrivnaty/02-thumb.jpg'),
  require('../../images/animals/vlkHrivnaty/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          	Ahoj, člověčí mládě, jsem vlk hřivnatý, ale někdy mě nazývají i&nbsp;psem hřivnatým. Vlastně se mi posmívají, že jsem jen liška s&nbsp;předlouhýma nohama. Vtipálci. Ty dlouhé nohy mi usnadňují pohyb ve vysoké trávě, v&nbsp;bažinách a pampách (to jsou rozsáhlé travnaté plochy). Jsem tzv. mimochodník, to znamená, že při chůzi pohybuji zároveň levýma a pravýma nohama.
        </AnimalText>
        <AnimalText>
          	Jmenuji se Karlos, narodil jsem se v&nbsp;Tallinnu. Vědělo jsi, že je to hlavní město Estonska? Tady v&nbsp;Brně jsem od roku 2013. Přede mnou už tu byla jedna samička, Saartje. Ta se zase narodila v&nbsp;Rotterdamu, to je největší přístav v&nbsp;Evropě a našlo bys ho, mládě, v&nbsp;Nizozemsku. Saartje je moc fajn. Tuhle 28.&nbsp;ledna 2016 se nám narodila tři vlčátka. Holčičku jsme pojmenovali Adéla, kluky Eda a Marek.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          	Náš rod ovšem nepochází z&nbsp;Rotterdamu ani Tallinnu. Naším původním domovem je střední Brazílie a severní Argentina. Obě tyto země jistě dobře znáš, jejich fotbaloví hráči (například Ronaldinho) jsou známí snad všude po světě. My vlci hřivnatí ale nežijeme na fotbalovém stadionu, dokonce ani v&nbsp;hledišti. Milejší nám jsou spíše bažiny, a to jak v&nbsp;Brazílii, tak v&nbsp;Argentině.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          	Obvykle nejsme při hledání potravy zrovna vybíraví, libujeme si například v&nbsp;jisté lilkovité rostlině, která nám pomáhá chránit se proti parazitům (to jsou mrňaví tvorové, se kterými nejsme kamarádi).
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
