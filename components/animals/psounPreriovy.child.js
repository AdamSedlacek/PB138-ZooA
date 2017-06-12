import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/psounPreriovy/01.jpg'),
  require('../../images/animals/psounPreriovy/02.jpg'),
  require('../../images/animals/psounPreriovy/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/psounPreriovy/01-thumb.jpg'),
  require('../../images/animals/psounPreriovy/02-thumb.jpg'),
  require('../../images/animals/psounPreriovy/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          „Vetřelec! Na místa, vetřelec!“
        </AnimalText>
        <AnimalText>
          Cože? Říkáte, že jste jen neškodné děti? Promiňte, měl jsem vás za lišky. Však jste možná lišky podšité. 
        </AnimalText>
        <AnimalText>
          „Už můžete vylézt z&nbsp;nor, byl to planý poplach.“
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Omlouvám se, nerad bych, aby to vypadalo, že jsme zbabělci, ale opatrnosti není nikdy dost. Takoví malí hlodavci jako my mají spoustu nepřátel. Proto tvoříme hlídky, které při sebemenším náznaku nebezpečí varují ostatní hlasitým štěkotem. No ano, štěkotem. Neříkají nám psouni proto, že bychom byli druhem psa, nejsme dokonce ani příbuzní, ale svým hlasem mu můžeme směle konkurovat.
        </AnimalText>
        <AnimalText>
          I&nbsp;s&nbsp;vámi lidmi ale máme něco společného – také žijeme ve městech, která jsou rozdělena do čtvrtí a v&nbsp;nich bydlí jednotlivé rodiny. Celé město je přitom propojeno sítí podzemních chodeb a nor. Tahle města můžou být opravdu ohromná. Jedno bylo údajně skoro tak velké jako celá Česká republika a žilo v&nbsp;něm asi čtyřicetkrát tolik obyvatel. A kde byste naše království měly hledat? No přece v&nbsp;Severní Americe. Hlavně na území Spojených států, ale třeba i&nbsp;v&nbsp;Kanadě nebo Mexiku. Vybíráme si velké suché pastviny, kde toho většinou moc neroste, takže si musíme vystačit s&nbsp;různými travami, bylinami, semeny a výhonky.
        </AnimalText>
      <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          A jaký je náš rodinný život? V&nbsp;jedné rodině (klanu) je obvykle jeden dospělý samec, několik samic a mláďata. Ta se rodí většinou po čtyřech až pěti a zpočátku jsou slepá, holá a úplně bezmocná. Proto až do svých šesti týdnů pobývají pořád v&nbsp;noře, aby se jim nic nestalo. Mladé samičky pak zůstávají součástí klanu po celý život, zatímco samci ho časem opouštějí, a to nejen ti nově narození, ale později i&nbsp;ti starší.
        </AnimalText>
        <AnimalText>
          No a já už vás budu muset taky opustit, mám přece službu na hlídání. Tak se mějte a moc na sebe neštěkejte.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
