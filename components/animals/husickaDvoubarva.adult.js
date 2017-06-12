import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/husickaDvoubarva/01.jpg'),
  require('../../images/animals/husickaDvoubarva/02.jpg'),
  require('../../images/animals/husickaDvoubarva/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/husickaDvoubarva/01-thumb.jpg'),
  require('../../images/animals/husickaDvoubarva/02-thumb.jpg'),
  require('../../images/animals/husickaDvoubarva/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Husička dvoubarvá je charakteristická barvou svého peří a také zvukem, který vydává. Jen se zaposlouchejte. Slyšeli jste ho již někdy? Jméno, které dostala v&nbsp;angličtině, je ve srovnání s&nbsp;českým mnohem výstižnější: žlutohnědá hvízdající kachna (<Text style={styles.italic}>fulvous whistling duck</Text>). Ale i&nbsp;český název je dost popisný.
        </AnimalText>
        <AnimalText>
          Ve volné přírodě byste husičku našli v&nbsp;subsaharské Africe, v&nbsp;Severní i Jižní Americe a v&nbsp;Indii. Žije ve sladkých vodách, například na velkých řekách, v&nbsp;bažinách nebo na jezerech. Důležité pro ni je, aby voda měla na březích hustou vegetaci. Zde si také hledá svou potravu. Husička jí nejen rostliny, ale i&nbsp;menší živočichy, které u&nbsp;vody uloví.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Už jsme zmínili, že peří husičky je zajímavě barevné, a vy myslím už vidíte důvod, proč tomu tak je. Díky kombinaci hnědé a černé barvy se husička v&nbsp;hustém porostu stává téměř neviditelnou. Nejčastěji se skrývá v&nbsp;rákosí, kde také hnízdí.
        </AnimalText>
        <AnimalText>
          Mimo období hnízdění najdete velká hejna husiček, jak spolu plavou. Nicméně jakmile nastane ta správná doba, husička si najde partnera a jsou jen a jen spolu. Kromě rákosu mohou hnízdit i&nbsp;ve stromových dutinách nebo v&nbsp;opuštěných hnízdech jiných ptáků.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Vajec naklade husička přibližně deset najednou a měsíc trvá, než se z&nbsp;nich vylíhnou mláďata. Ta se dožívají desíti až dvanácti let. Zkuste si tedy spočítat, kolik mláďat se za život narodí jedné husičce. Vždyť jich může být až sto!
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
