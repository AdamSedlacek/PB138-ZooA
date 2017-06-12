import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/zirafaSitovana/01.jpg'),
  require('../../images/animals/zirafaSitovana/02.jpg'),
  require('../../images/animals/zirafaSitovana/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/zirafaSitovana/01-thumb.jpg'),
  require('../../images/animals/zirafaSitovana/02-thumb.jpg'),
  require('../../images/animals/zirafaSitovana/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Žirafy jsou nejvyšší zvířata na souši, můžou mít až šest metrů, takže by mohly bez problémů koukat do oken v&nbsp;patře. Tady v&nbsp;zoo žijí žirafy síťované, které pocházejí jako všechny žirafy z&nbsp;Afriky. Žijí v&nbsp;savanách nebo v&nbsp;lesích, kde okusují listí a větve stromů. K&nbsp;tomu jim pomáhá i&nbsp;jejich půlmetrový jazyk, který používají podobně jako sloni chobot, obtočí jím větvičku a strčí si ji do pusy. Jazyk používají i&nbsp;k&nbsp;čištění nosu nebo uší, ale to doma radši nezkoušejte. Možná jste si všimli, že má žirafí jazyk divnou barvu. Není to špína, je to proto, aby si ho nespálily na slunci.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Možná víte, že každý člověk má úplně jiné otisky prstů než všichni ostatní lidé. Žirafy to takhle mají se skvrnami. Kdybyste se na ně podívali opravdu pečlivě, zjistili byste, že žádné dvě žirafy nejsou úplně stejné. Ale to není na žirafách jediná zajímavá věc. Jsou to sudokopytníci, stejně jako třeba krávy. A každý správný sudokopytník spí vestoje. Žirafy jsou na stání opravdu zvyklé, problém jim to dělá, jenom když se potřebují napít. To jste možná už v&nbsp;zoo viděli: žirafa se doširoka rozkročí předníma nohama a až potom dosáhne tlamou na vodní hladinu a může se osvěžit.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Život žiraf není osamělý, žijí ve stádech. Společně kráčí mílovými kroky, kam se jim zachce. Dobře, možná ty kroky nejsou úplně mílové, ale jediným krokem se dokáže žirafa posunout skoro o&nbsp;pět metrů. A když na to přijde, dokážou žirafy utíkat rychlostí přes 50&nbsp;kilometrů za hodinu, takže při průběhu obcí by nezdržovaly automobilovou dopravu. Pokud by tedy byla obec krátká, protože vydrží utíkat jen chvíli. Naštěstí běh až tak moc nepotřebují, protože si na ně skoro nikdo netroufne. Občas jen lvi, se kterými se žirafy dokážou vypořádat dobře mířenými kopanci.
        </AnimalText>
        <AnimalText>
          A zajímavost na závěr: Možná znáte Julia Caesara (třeba z&nbsp;Asterixe). Od Egypťanů jednou dostal jako dar žirafu a pojmenoval ji <Text style={styles.italic}>Camelopardus</Text>, což je dodneška latinský druhový název jedné ze žiraf. Jenže to Caesar trochu popletl, protože ten název znamená něco jako <Text style={styles.italic}>velbpard</Text>. Přišlo mu totiž, že žirafa vypadá jako zvíře mezi velbloudem a leopardem.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
