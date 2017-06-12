import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/jaguarundi/01.jpg'),
  require('../../images/animals/jaguarundi/02.jpg'),
//  require('../../images/animals/jaguarundi/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/jaguarundi/01-thumb.jpg'),
  require('../../images/animals/jaguarundi/02-thumb.jpg'),
// require('../../images/animals/jaguarundi/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Jaguarundi je malá kočkovitá šelma. Na rozdíl od kočky domácí je o&nbsp;fousek větší (může vážit až 9&nbsp;kg) a Hurvínkovi by se jistě líbila. Zatímco skloňování kočky se mu moc nedařilo („První pád: Kdo, co? Prostě kočka. – Bez koho, bez čeho? Bez ocasu.“), jaguarundi by si určitě oblíbil. Jméno této šelmy zůstává totiž ve všech pádech stejné. Tak pro představu:
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>1.&nbsp;pád: Kdo, co?</Text> Prostě jaguarundi (latinsky též <Text style={styles.italic}>Puma yagouaroundi</Text>).
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>2.&nbsp;pád: Z&nbsp;koho, z&nbsp;čeho?</Text> Přece z&nbsp;Jižní a Střední Ameriky od Argentiny po Mexiko, bez jaguarundi si však život neumí představit ani na Floridě, kam byla zavlečena lidmi.
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>3.&nbsp;pád: Ke komu, k&nbsp;čemu?</Text> K&nbsp;nám do Brna přicestovaly první dvě samice jaguarundi v&nbsp;roce 2009 z&nbsp;Polska. Jedna z&nbsp;nich byla následující rok vyměněna se Zoo Ostrava za samce, který díky své výrazně hnědé srsti s&nbsp;rezavým nádechem dostal jméno Fox.
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>4.&nbsp;pád: Vidím koho, co?</Text> Ve zdejším výběhu můžete v&nbsp;současné době vidět právě Foxe, případně jeho družku Fionu, která se narodila roku 2013 v&nbsp;Berlíně a u&nbsp;nás je od roku 2014. Zahlédnout však můžete i&nbsp;jedno z jejich mláďat, samičku Beatriz, která se narodila v&nbsp;listopadu 2015.
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>5.&nbsp;pád: Oslovujeme, voláme.</Text> Či&nbsp;číí! Jak jinak byste chtěli na jaguarundi volat? Pravděpodobně vás však budou ignorovat, případně vás odmění syčením a prskáním, ať už si za oslovení zvolíte cokoliv.
        </AnimalText>
        <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          <Text style={styles.italic}>6.&nbsp;pád: O&nbsp;kom, o&nbsp;čem?</Text> Nebyla řeč třeba ještě o&nbsp;jejich kulatých ouškách, krátkých nohách, svalnatých tělech či dlouhých silných ocasech.
        </AnimalText>
        <AnimalText>
          <Text style={styles.italic}>7.&nbsp;pád: S&nbsp;kým, s&nbsp;čím?</Text> S&nbsp;drobnými živočichy byste u&nbsp;nich jistě zabodovali jako u&nbsp;každé jiné kočky. S&nbsp;ptáky, obojživelníky či myšmi je jim nejlépe.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
