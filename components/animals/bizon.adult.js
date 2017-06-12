import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/bizon/01.jpg'),
  require('../../images/animals/bizon/02.jpg'),
  require('../../images/animals/bizon/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/bizon/01-thumb.jpg'),
  require('../../images/animals/bizon/02-thumb.jpg'),
  require('../../images/animals/bizon/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
        Kdybychom se Čechů zeptali, jaké je podle nich typické zvíře pro Severní Ameriku, spousta z&nbsp;nich by si jistě vzpomněla na orla bělohlavého, symbol Spojených států amerických. Hravým duším by se mohla vybavit postava kačera Donalda a jistě by existovalo vysoké procento lidí, kteří by si představili obrovské sudokopytníky vířící prach ve westernových příbězích Karla Maye – bizony.
        </AnimalText>
        <AnimalText>
        Doby, kdy v&nbsp;Severní Americe žilo 60&nbsp;milionů bizonů, kteří migrovali v&nbsp;tisícihlavých stádech, jsou dávno pryč. Po příchodu „bledých tváří“ z&nbsp;Evropy se museli Indiáni smířit s&nbsp;tím, že jejich zdroj potravy i&nbsp;materiálu na oděvy bude takřka vyhuben a že i&nbsp;oni se ocitnou v&nbsp;krutých rukou osadníků.
        </AnimalText>
        <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        V&nbsp;polovině 19.&nbsp;století dala americká vláda impulz k&nbsp;masovému vybíjení bizonů za účelem vyhladovění Indiánů a zisku jejich půdy. Počet bizonů klesl pod 1&nbsp;000 jedinců. V&nbsp;minulém století se naštěstí podařilo počty bizonů zvýšit. Počítá se asi s&nbsp;půl milionem jedinců, avšak velká část z&nbsp;nich je zkřížena s&nbsp;turem domácím a napolo domestikována. Své latinské pojmenování <Text style={styles.italic}>bison</Text> (celým názvem <Text style={styles.italic}>Bison bison</Text>), které lze interpretovat jako „divoký tur“, by charakterizovalo jen kolem 30&nbsp;000 jedinců žijících v&nbsp;rezervacích a asi 5&nbsp;000 jedinců pohybujících se mimo rezervace.
        </AnimalText>
        <AnimalText>
        Americkým bizonům se podobá i jejich evropský příbuzný, známý jako zubr. Měl v&nbsp;Evropě podobný osud jako bizon americký a jeho populaci se podařilo zachránit jen díky posledním 56 zubrům, kteří žili v&nbsp;oborách.
        </AnimalText>
        <InPageImage indexes={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
        Bizoni jsou obrovská býložravá zvířata. Samci mohou vážit i&nbsp;tunu, samice „drží štíhlou linii“ a hmotností nepřesáhnou 650&nbsp;kilogramů. Když potřebuje zoo bizona někam přemístit, musí na to povolat hasiče s&nbsp;těžkou zdvihací technikou.
        </AnimalText>
        <AnimalText>
        Bizony chová Zoo Brno již od svého založení a za tu dobu se na Mniší hoře narodila řada mláďat.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
