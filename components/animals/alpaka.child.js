import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/alpaka/01.jpg'),
  require('../../images/animals/alpaka/02.jpg'),
  require('../../images/animals/alpaka/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/alpaka/01-thumb.jpg'),
  require('../../images/animals/alpaka/02-thumb.jpg'),
  require('../../images/animals/alpaka/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Jestli někdy pojedete do Jižní Ameriky, zkuste navštívit Peru. Pozor, to není název tamní prádelny! Jmenuje se tak celý jeden stát. Když si na dlouhé cestě konečně vyperete svoje smradlavé a zašpiněné peruánské ponožky, místní obyvatelé podle jejich barvy poznají, jakou srst měly lamy alpaky, zvířecí obyvatelky Peru a okolí, díky nimž mohly být tyto ponožky vyrobeny. Dobří ponožkoví detektivové poznají, že alpaka může být:
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>BÍLÁ jako ovce</Text>
        </AnimalText>
        <AnimalText>
          Alpaku si Peruánci nevycvičili pro těžkou práci. Slouží jim podobně jako ovce u&nbsp;nás v&nbsp;Evropě – lidé ji jednou za čas ostříhají, čímž získají spoustu vlny. Pletou z&nbsp;ní nejen ponožky, ale i&nbsp;svetry nebo čepice.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
      <AnimalText>
          <Text style={styles.strong}>BÉŽOVÁ jako velbloud</Text>
        </AnimalText>
        <AnimalText>
          Věřte nebo ne, lama alpaka je blízká příbuzná velbloudů. Je jen menší, nemá hrby a díky tvrdším kopýtkům se lépe pohybuje ve skalách.
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>HNĚDÁ jako planina</Text>
        </AnimalText>
        <AnimalText>
          Lidé si před mnoha tisíci lety ochočili alpaky v&nbsp;oblasti náhorní plošiny, a proto jsou zvyklé žít v&nbsp;drsných podmínkách. Dobře snáší velké rozdíly teplot a nažerou se i&nbsp;z&nbsp;pár trsů trávy. Zvláštní je na nich také to, že jim vepředu tlamy chybí horní zuby. Nezbývá jim nic jiného, než uřezávat rostliny zuby spodními.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          <Text style={styles.strong}>ČERNÁ jako nebezpečí</Text>
        </AnimalText>
        <AnimalText>
          Alpaky se pasou ve stádech a jsou u&nbsp;toho hodně ostražité. Blížící se nebezpečí dokážou zpozorovat na stovky metrů. Vedoucí samec si svého stáda natolik váží, že je ochotný nasadit vlastní život, aby ostatní zachránil.
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          <Text style={styles.strong}>STRAKATÁ jako překvapení</Text>
        </AnimalText>
        <AnimalText>
          Alpakám se rodí zpravidla jedno mládě ročně. Jeho rodiče dopředu nevědí, jakou barvu bude mít. Občas se dokonce narodí mládě vícebarevné.
        </AnimalText>
        <AnimalText>
        
        </AnimalText>
        <AnimalText>
          Peruánci dokážou rozeznat ne pět, ale přes dvacet odstínů lamí srsti, a tak se jejich tržiště s&nbsp;oblečením hemží barvami. Až odtud budete odjíždět, nezapomeňte si koupit nějaký hřejivý suvenýr. Třeba dvacet párů ponožek, ať máte zásobu pro příští výlet a nemusíte tolik prát.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
