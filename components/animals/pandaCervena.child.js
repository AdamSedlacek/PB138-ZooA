import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from '../../styles/styles';
import InPageImage from '../inPageImage';
import AnimalText from '../animalText';
import AnimalTemplate from '../animalTemplate';

const IMAGES = [
  require('../../images/animals/pandaCervena/01.jpg'),
  require('../../images/animals/pandaCervena/02.jpg'),
  require('../../images/animals/pandaCervena/03.jpg'),
];

const THUMBNAILS = [
  require('../../images/animals/pandaCervena/01-thumb.jpg'),
  require('../../images/animals/pandaCervena/02-thumb.jpg'),
  require('../../images/animals/pandaCervena/03-thumb.jpg'),
];

var AnimalDetail = React.createClass({
  render() {
    return (
      <AnimalTemplate firstIndex={[2]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator}>
        <AnimalText>
          <Text style={styles.italic}>Proč jsou pandy samotáři?</Text> To vám bylo děti takhle:
        </AnimalText>
        <AnimalText>
          Za dávných časů pobíhalo po himálajských lesích mnoho malých pand červených. Všechny si rozuměly, vzájemně se krmily bambusovými výhonky, ovocem a drobnými živočichy, na které narazily. Hrály si na vysokých stromech a z&nbsp;nich sbíhaly hlavou dolů.
        </AnimalText>
        <AnimalText>
          Občas se však stalo, že některá panda běžela moc rychle, zapomněla zpomalit a narazila si čumáček. Nezranila se, ale její hrdost utrpěla – a v&nbsp;tu chvíli se zařekla, že už s&nbsp;nikým nebude běhat a skákat po stromech. Vylezla do koruny toho, který stál nejblíže, tam se usadila a na její strom už nikdy žádná jiná panda vylézt nesměla.
        </AnimalText>
      <InPageImage indexes={[0]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          Ostatní pandy si toho však nevšímaly, mohly si přece hrát s&nbsp;někým jiným. Jenže scénář se často opakoval, a když spadla i&nbsp;poslední panda a uraženě vylezla na svůj strom, zavládl v&nbsp;himálajských lesích klid. A od té doby jsou pandy samotáři, dlouhé časy proleží na stromech a dolů se – tentokrát už opatrně, i&nbsp;když stále po čumáčku, – vypraví jen pro jídlo.
        </AnimalText>
      <InPageImage indexes={[1]} thumbnails={THUMBNAILS} images={IMAGES} navigator={this.props.navigator} />        
        <AnimalText>
          <Text style={styles.italic}>A proč se naše pandy nechávají krmit z&nbsp;ruky?</Text>
        </AnimalText>
        <AnimalText>
          I&nbsp;naše dvě pandy, Pandoru a Huana, potkal podobný příběh. Když při jedné z&nbsp;her Pandora spadla na čumáček a uraženě vylezla na vysoký strom, Huan si ji chtěl jít udobřit. Jenže ona ho stále vyháněla a jeho snahy odmítala, dokonce mu zakazovala chodit ke společnému krmítku, které si teď přivlastnila. Chudák Huan z&nbsp;toho byl nešťastný a začal hubnout. Proto ho chovatelé raději přesunuli do vlastního výběhu, kde už je spokojený a o&nbsp;jídlo se dělit nemusí. Dokonce se od nich nechává krmit z&nbsp;ruky, aby Pandoře ukázal, že si umí najít i&nbsp;jiné přátele. A stejně tak Pandora, stále ještě uražená, svačí z&nbsp;rukou chovatelů proto, aby Huanovi připomněla, že to tenkrát nebyli oni, kvůli komu si narazila čumáček.
        </AnimalText>
      </AnimalTemplate>
    );
  }
});

module.exports = AnimalDetail;
