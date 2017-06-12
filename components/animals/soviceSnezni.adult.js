import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/soviceSnezni/01.jpg'),
  require('../../images/animals/soviceSnezni/02.jpg'),
  require('../../images/animals/soviceSnezni/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/soviceSnezni/01-thumb.jpg'),
  require('../../images/animals/soviceSnezni/02-thumb.jpg'),
  require('../../images/animals/soviceSnezni/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          Sovice sněžní se nejvíce proslavily díky Hedvice, sově Harryho Pottera. To na nich ale zdaleka není to nejzajímavější.
        </AnimalText>
        <AnimalText>
          S&nbsp;vzrůstem k&nbsp;70&nbsp;cm a váhou až 3&nbsp;kg patří k&nbsp;největším z&nbsp;řádu sov. Na rozdíl od klasických sov (latinsky <Text style={styles.italic}>Tyto</Text>) však nepatří do čeledi sovovitých, ale mezi puštíkovité, přesněji výry (latinsky <Text style={styles.italic}>Bubo</Text>). 
        </AnimalText>
        <AnimalText>
          Spolu s&nbsp;lumíky, zajíci a polárními liškami obývají sovice sněžní tundry, i&nbsp;když na zimu se přesouvají jižněji – do Skandinávie, na Sibiř, Aljašku a v&nbsp;Kanadě až k&nbsp;hranicím s&nbsp;USA. Živí se převážně lumíky. Když se lumíci přemnoží, zvětší se i&nbsp;populace sovic; když je ale lumíků málo, vezmou sovy zavděk jinými živočichy včetně ptáků – třeba sov pálených. V&nbsp;případě nouze se ale uživí i&nbsp;mršinami, v&nbsp;záloze přesto mají další svébytný způsob obživy: sledují polární lišky na lovu a kradou jim jejich kořist. 
        </AnimalText>
       <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Sovice nejsou v&nbsp;přírodě naštěstí příliš ohroženy, i&nbsp;tak je ale zasáhl posun civilizace do oblastí jejich zimovišť a hnízdišť. Občas se sovice zapletou do elektrických drátů, někdy do rybářského vybavení. Mají však i&nbsp;přirozené nepřátele – lišky. Sovice si totiž staví hnízda na skalních výběžcích nebo na zemi a lišky jim z&nbsp;nich kradou vajíčka.
        </AnimalText>
        <AnimalText>
          Pokud však vajíčka udrží sovice před liškami v&nbsp;bezpečí, zhruba po měsíci se vylíhnou mláďata; obvykle jich je kolem pěti (jsou-li přemnoženi lumíci, může jich však být i&nbsp;třikrát víc). Po tři týdny se mláďata nehnou z&nbsp;tepla peřím vystlaného hnízda. Pak už jsou dost velká na to, aby mohla vyletět ven a během následujícího měsíce se naučit obstarávat si potravu. Aby toho, čím jsou sovice zvláštní, nebylo málo, jako jediné z&nbsp;řádu sov loví ve dne.
        </AnimalText>
       <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />
        <AnimalText>
          Pokud patříte k&nbsp;lidem, kteří rádi hledají chyby ve filmech, určitě vás potěší, že Hedvika je ve filmovém Harrym Potterovi sameček. Poznáte to podle zbarvení – samci jsou bílí jen s&nbsp;několika černými skvrnami, zatímco samice jsou kropenaté (stejně tak i&nbsp;čerstvě vylíhnutá mláďata).
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
